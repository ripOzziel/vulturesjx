'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { analizar } from './module/generador.js';
import { analizarJ } from './module/generadorJ.js';
import { analizarC } from './module/generadorC.js';
import { errores } from './helper/Errores.js';
import { impresiones } from './helper/Impresiones.js';

const HomePage = () => {
  const [textarea, setTextarea] = useState('');
  const [output, setOutput] = useState('');
  const [cCode, setCCode] = useState('');
  const [showOutput, setShowOutput] = useState(false); // State to control the visibility of the output section
  const handleCompile = async () => {
    try {

      if(!cCode)
      {
        throw new Error("No Jasmin code to compile");
      }
      setShowOutput(true)
      const response = await fetch('http://localhost:3001/compile', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ jasminCode: cCode }),
      });

      if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Server error: ${errorText}`);
      }

      const data = await response.json();
      setOutput(data.output);
  } catch (error) {
      console.error('Error compiling code:', error.message);
      setOutput(`Error: ${error.message}`);
  }
};


  const traducirJ = () => {
    const texto = textarea.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
    setCCode(analizarJ(texto));
    setShowOutput(true); // Show output when button is clicked
  };
  
  const traducirC = () => {
    const texto = cCode.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
    setTextarea(analizarC(texto));
    setShowOutput(true); // Show output when button is clicked
  };
  
  const iniciar = () => {
    const regexHiram = /hiram\{\s*\S[\s\S]*?\}/;
    if (regexHiram.test(textarea)) {
      console.log(String(textarea));
      const texto = textarea.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
      const textoAnalizado = analizar(texto);
      console.log("analizado: " + textoAnalizado);
      
      if (impresiones.length !== 0) {
        const impreso = impresiones.join('\n'); //constante de las impresiones de la linea
        setOutput(impreso);
      } else if (errores.length === 0) {
        setOutput("Compilacion correcta!");
      } else {
        const erroresCompilados = errores.join('\n').trim('');
        setOutput(erroresCompilados);
        console.log(errores);
      }
      setShowOutput(true); // Show output when button is clicked
    } else {
      setOutput("Error de sintaxis");
      setShowOutput(true); // Show output when button is clicked
    }
  };

  const escribir = (event) => {
    const textAreaAct = event.target.value;
    setTextarea(textAreaAct);
  };

  const escribirC = (event) => {
    const textAreaAct = event.target.value;
    setCCode(textAreaAct);
  };

  const soltar = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const extension = file.name.split('.').pop();
    if (extension === 'txt' || extension === 'c') {
      const reader = new FileReader();
      reader.onload = function (event) {
        setCCode(event.target.result);
      };
      reader.readAsText(file);
    }
};

  const borrar = () => {
    setTextarea('');
    setOutput('');
    setCCode('')
    setShowOutput(false); // Hide output when cleared
  };

  const obtenerNumerosDeLinea = () => {
    if (textarea) {
      const lineas = textarea.split('\n');
      return Array.from({ length: lineas.length }, (_, index) => index + 1);
    } else {
      return [];
    }
  };

  const obtenerNumerosDeLineaC = () => {
    if (cCode) {
      const lineas = cCode.split('\n');
      return Array.from({ length: lineas.length }, (_, index) => index + 1);
    } else {
      return [];
    }
  };

  return (
    <main className="bg-gray-900 h-full text-white">
      <section className="p-5 grid grid-cols-6 gap-6">
        <Link href="https://www.youtube.com/watch?v=cUcMegPmYIo&list=OLAK5uy_mTTV6CybTZyXnTJ4ZQXms1dhFXqjadRhA&index=2" target="_blank" rel="noopener noreferrer">
          <div className="cursor-pointer hover:text-blue-500">Vulture ✞</div>
        </Link>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={iniciar}>Run ➸</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={borrar}>✧°</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={traducirC}>C Translator</button>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" onClick={traducirJ}>J Translator</button>
        <button className="bg-purple-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCompile}>Magic</button>

      </section>

      <section className="flex h-full w-full">
        <section className="w-[50%] flex flex-row">
          <section id="numeroDeLinea" className="text-right py-10 px-2 bg-gray-800">
            {obtenerNumerosDeLinea().map((numero) => (
              <div key={numero}>{numero}</div>
            ))}
          </section>
          <textarea
            className="bg-gray-700 w-full h-full text-white italic overflow-y-auto py-10 px-3"
            placeholder="vul✞ure"
           
            value={textarea}
            onChange={escribir}
            cols="30"
            rows="10"
          ></textarea>
        </section>
        <section className="w-[50%] flex flex-row">
          <section id="numeroDeLinea" className="text-right py-10 px-2 bg-gray-800">
            {obtenerNumerosDeLineaC().map((numero) => (
              <div key={numero}>{numero}</div>
            ))}
          </section>
          <textarea
            onChange={escribirC}
            className="bg-gray-700 w-full h-full text-white italic overflow-y-auto py-10 px-3"
            onDrop={soltar}
            value={cCode}
            placeholder="Drop your C file here"
            cols="30"
            rows="10"
          ></textarea>
        </section>
      </section>
      {showOutput && (
        <section id="terminal" className="w-full bg-black text-green-400 p-4 rounded-lg">
          <p className="mb-2">Output</p>
          <textarea 
            value={output} 
            readOnly 
            className="w-full h-40 bg-black text-green-400 rounded-md overflow-y-auto p-2" 
          />
        </section>
      )}
    </main>
  );
};

export default HomePage;
