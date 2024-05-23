/**
 * ArratInit es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4, { ErrorListener } from "antlr4";
import JasminLexer from "../../grammar/JasminLexer.js";
import JasminParser from "../../grammar/JasminParser.js";
import CustomVisitorJ from "../helper/CustomVisitorJ.js";

import { errores } from "../helper/Errores.js";
import { memoria } from "../helper/Memoria.js";
import { impresiones } from "../helper/Impresiones.js";
import { ErrorSintaxis, ErrorLexico } from "../helper/List.js";


export const analizarJ = (input) => {
 
  //borrando los helpers
  Object.keys(memoria).forEach(key => delete memoria[key]);
  errores.splice(0, errores.length)
  impresiones.splice(0, impresiones.length) 

  const chars = new antlr4.InputStream(input);
  const lexer = new JasminLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new JasminParser(tokens);
  parser.buildParseTrees = true;
/*
  parser.removeErrorListeners(); // Elimina los listeners de errores predeterminados
  lexer.removeErrorListeners();
  */
  parser.addErrorListener(
  new ErrorSintaxis()
  )

  lexer.addErrorListener(
    new ErrorLexico()
  )


  
  try{
   
    console.log("Antes de analizar...");
    const tree = parser.prog();
    console.log(tree.toStringTree(parser.ruleNames));
    const customVisitor = new CustomVisitorJ();
    
    console.log("Antes de visitar...");
    return customVisitor.visitProg(tree);
    
  }
  catch(error){
    //console.error("Ocurrió un error:", error.message);
    errores.push(error.message)
    console.log(error.message);
    console.log("detenido");
  }
  

};