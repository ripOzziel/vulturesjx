import { ErrorListener } from "antlr4";


export class ErrorSintaxis extends ErrorListener {
    syntaxError(lexer, char, linea, column, msg, e) {
        throw new Error(`Error Sintactico en la línea ${linea}, columna ${column}: ${msg}`);
      }
  }
  export class ErrorLexico extends ErrorListener {
    syntaxError(lexer, char, line, column, msg, e) {
      throw new Error(`Error léxico en la línea ${line}, columna ${column}: ${msg}`);
    }
  }