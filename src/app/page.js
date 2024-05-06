'use client'
import React, {useState, useRef} from 'react'
import Link from 'next/link';
import { analizar } from './module/generador.js'
import { analizarC } from './module/generadorC.js';
import { errores } from './helper/Errores.js';
import { impresiones } from './helper/Impresiones.js';

const HomePage = () => {
  //aqui se enceuntran los hooks
  const [textarea, setTextarea]=useState('')
  const [output, setOutput]=useState('')
  const [cCode, setCCode] = useState('')

  
  //funcion para llamar a la funcion analizar del generador
  const traducir = () =>{
    const texto = cCode.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
    setTextarea(analizarC(texto))
  }
  const iniciar=()=>
  {
    
    const regexHiram = /hiram\{\s*\S[\s\S]*?\}/;
    if(regexHiram.test(textarea))
    {
      console.log(String(textarea));
      const texto = textarea.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
      const textoAnalizado =analizar(texto)
      console.log("analizado: " +  textoAnalizado);
      
      if(impresiones.length != 0){
        const impreso = impresiones.join('\n') //constante de las impresiones de la linea
        setOutput(impreso)
      }
      else if(errores.length===0 ){
        setOutput("Compilacion correcta!")
      }
      else{
        const erroresCompilados = errores.join('\n').trim('')
        setOutput(erroresCompilados)
        console.log(errores);
      }
      
    }
    else{
      setOutput("Error de sintaxis")
    }
  }

  const escribir =(event)=>{ //funcion que actualiza el text area a lo que escribamos en el teclado
    const textAreaAct = event.target.value;
    setTextarea(textAreaAct)

  }
  const escribirC =(event)=>{ //funcion que actualiza el text area a lo que escribamos en el teclado
    const textAreaAct = event.target.value;
    setCCode(textAreaAct)

  }
  const soltar = (e)=>{
    e.preventDefault();
    
    const file = e.dataTransfer.files[0];
  if (file.type === 'text/plain') {
    const reader = new FileReader();
    reader.onload = function(event) {
      setCCode(event.target.result);
    };
    reader.readAsText(file);
  }
  }
  const borrar = () =>{ //funcion para borrar el resultado y el mensaje
    setTextarea("")
    setOutput("")
   
  }
  
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
    <main className="bg-black h-full">
      <section className="p-5 grid grid-cols-4">
        <Link href="https://www.youtube.com/watch?v=cUcMegPmYIo&list=OLAK5uy_mTTV6CybTZyXnTJ4ZQXms1dhFXqjadRhA&index=2" target="_blank" rel="noopener noreferrer">
          <div target="_blank" rel="noopener noreferrer">Vulture ✞ </div>
        </Link>
        <button onClick={traducir}>C Translator</button>
        <button onClick={iniciar}>Run ➸</button>
        <button onClick={borrar}>✧°</button>
      </section>
      <section className="flex h-full">
        <section className="w-[37%] flex h-auto">
          <section id="numeroDeLinea" className="text-right py-10 px-5">
            {obtenerNumerosDeLinea().map((numero) => (
              <div key={numero}>{numero}</div>
            ))}
          </section>
          <textarea
            
            onChange={escribir}
            className="bg-slate-200 w-full h-full rounded-lg text-black italic overflow-y-auto m-4 py-6 px-2"
            value={textarea}
            placeholder="✞✞✞"
            cols="30" // ajustar el número de columnas
            rows="10" // ajustar el número de filas
          ></textarea>
        </section>
        <section id="terminal" className="h-30  w-[25%] flex">
          <center className="h-[80%] w-[100%]">
            <p>Output</p>
            <textarea value={output} readOnly className="w-full h-full rounded-md bg-slate-200 text-black overflow-y-auto" />
          </center>
        </section>
        <section className="w-[37%] flex h-auto">
          <section id="numeroDeLinea" className="text-right py-10 px-5">
            {obtenerNumerosDeLineaC().map((numero) => (
              <div key={numero}>{numero}</div>
            ))}
          </section>
          <textarea
            className="bg-slate-200 w-full h-full rounded-lg text-black italic overflow-y-auto m-4"
            placeholder="C Code"
            onDrop={soltar}
            value={cCode}
            onChange={escribirC}
            cols="30" // ajustar el número de columnas
            rows="10" // ajustar el número de filas
          ></textarea>
        </section>
      </section>
    </main>
  );
}

export default HomePage