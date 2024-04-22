/**
 * ArratInit es el nombre que tendrá la gramática
 * se debe remplazar en las importaciones
 */
import antlr4, { ErrorListener } from "antlr4";
import TranslateLexer from "../../grammar/TranslateLexer.js";
import TranslateParser from "../../grammar/TranslateParser.js";
import CustomVisitorC from "../helper/CustomVisitorC.js";

import { errores } from "../helper/Errores.js";
import { ErrorSintaxis, ErrorLexico } from "../helper/List.js";


export const analizarC = () => {
  const input = `int main() {
    int a ;
    a = 0 ;
    if(a)
    {
      int b;
    }
    printf("Try programiz.pro");
    printf("Try sadasd.pro");
}`
  //borrando los helpers
  errores.splice(0, errores.length)

  const chars = new antlr4.InputStream(input);
  const lexer = new TranslateLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new TranslateParser(tokens);
  parser.buildParseTrees = true;

  parser.removeErrorListeners(); // Elimina los listeners de errores predeterminados
  lexer.removeErrorListeners();
  
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
    const customVisitor = new CustomVisitorC();
    
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