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

  
  //funcion para llamar a la funcion analizar del generador
  const traducir = () =>{
    const texto = textarea.replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "").trim();
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
  const borrar = () =>{ //funcion para borrar el resultado y el mensaje
    setTextarea("")
    setOutput("")
   
  }
  
  const obtenerNumerosDeLinea = () => {
    const lineas = textarea.split('\n');
    return Array.from({ length: lineas.length }, (_, index) => index + 1);
  };
  return (
    <main className='bg-black h-full'>
      <section className='p-5 grid grid-cols-4'> 
      <Link href="https://www.youtube.com/watch?v=cUcMegPmYIo&list=OLAK5uy_mTTV6CybTZyXnTJ4ZQXms1dhFXqjadRhA&index=2" target="_blank" rel="noopener noreferrer">
        
      <div target="_blank" rel="noopener noreferrer">Vulture ✞ </div>
      
      </Link>
      <button onClick={() =>traducir()}>C Translator</button>
      <button onClick={() =>iniciar()}>Run ➸</button>
      <button onClick={() =>borrar()}>✧°</button>
      </section>
      <section className='flex h-full '>
        <section id='numeroDeLinea' className='text-right py-10 px-5' >
        {obtenerNumerosDeLinea().map((numero) => (
          <div key={numero}>{numero}</div>
        ))} 
        </section>
        <textarea  onChange={escribir} className='bg-slate-200 w-[60%] h-auto p-10 rounded-lg text-black italic overflow-y-auto'  value={textarea} placeholder='✞✞✞'></textarea>

        <section id='terminal' className='h-full  w-[50%] '>
          <center>
            <p>Output</p>
            <textarea value={output} readOnly className='w-[80%] h-auto rounded-md bg-slate-200 text-black overflow-y-auto'/>
          </center>
        </section>
        
      </section>
      
      
      </main>
  )
}

export default HomePage