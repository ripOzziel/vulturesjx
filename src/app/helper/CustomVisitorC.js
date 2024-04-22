
import TranslateVisitor from '../../grammar/TranslateVisitor.js';


// This class defines a complete generic visitor for a parse tree produced by TranslateParser.

export default class CustomVisitorC extends TranslateVisitor {
		constructor(){
			super();
			this.translation = ''; // Variable para almacenar la traducción
		}
		tratoDeDataType(con){
			const texto = con.getText()
			const palabrasReemplazar ={
			'int': 'num ',
			'string': 'vul ',
			'char ':'v '
		}
		const regex = new RegExp(Object.keys(palabrasReemplazar).join("|"), "gi");

		const textoModificado = texto.replace(regex, function(match) {
		return palabrasReemplazar[match.toLowerCase()];
		});
		return textoModificado
		}
	// Visit a parse tree produced by TranslateParser#prog.
        visitProg(ctx) {
         // Inicia la traducción con la apertura del bloque de código
		 this.translation += 'hiram'
		this.translation += '{\n';
		
		// Visita el contenido del programa y agrega la traducción
		const childrenTranslations = this.visitChildren(ctx);
		const notEmptyChildrenTranslation = childrenTranslations.filter(e => e !== undefined) //eliminamos los nodos vacios que retorna
		console.log(notEmptyChildrenTranslation);
		if (notEmptyChildrenTranslation.length > 0) {
			for (let i = 0; i < notEmptyChildrenTranslation[0].length; i++) {
				console.log(notEmptyChildrenTranslation[0][i]);
				if(notEmptyChildrenTranslation[0][i] !== undefined)
				{
					this.translation += notEmptyChildrenTranslation[0][i]+'\n';

				}
			}
		}

		// Agrega el cierre del bloque de código
		this.translation += '}\n';

		console.log(this.translation);

		return this.translation;
		}


	// Visit a parse tree produced by TranslateParser#content.
	visitContent(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by TranslateParser#declaracion.
	visitDeclaracion(ctx) {
		console.log("Declaracion");
		console.log(ctx.getText());
		console.log(this.tratoDeDataType(ctx));
		
	  return  this.tratoDeDataType(ctx)
	}


	// Visit a parse tree produced by TranslateParser#declAndAssig.
	visitDeclAndAssig(ctx) {
		console.log("Declaracion y asignacion");

	  return this.tratoDeDataType(ctx)
	}


	// Visit a parse tree produced by TranslateParser#asignacion.
	visitAsignacion(ctx) {

	  return this.tratoDeDataType(ctx)
	}


	// Visit a parse tree produced by TranslateParser#sentenciaIf.
	visitSentenciaIf(ctx) {
		console.log("Sentencia if");
	  return
	}


	// Visit a parse tree produced by TranslateParser#condicion.
	visitCondicion(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#verdaderoOFalso.
	visitVerdaderoOFalso(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#expresionLogica.
	visitExpresionLogica(ctx) {
	  return
	}


	// Visit a parse tree produced by TranslateParser#expresionRelacional.
	visitExpresionRelacional(ctx) {
	  return
	}


	// Visit a parse tree produced by TranslateParser#impresion.
	visitImpresion(ctx) {
        console.log("Impresion")

        const print = ctx.getText().replace('printf', 'printPlease')
      
	  return print
	}


	// Visit a parse tree produced by TranslateParser#concatenacion.
	visitConcatenacion(ctx) {
	  return
	}


	// Visit a parse tree produced by TranslateParser#string.
	visitString(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#expp.
	visitExpp(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#parentesis.
	visitParentesis(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#timesDiv.
	visitTimesDiv(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#parentesisMultiply.
	visitParentesisMultiply(ctx) {
		return
	}


	// Visit a parse tree produced by TranslateParser#numero.
	visitNumero(ctx) {
	  return 
	}


	// Visit a parse tree produced by TranslateParser#char.
	visitChar(ctx) {
	  return 
	}


	// Visit a parse tree produced by TranslateParser#plusSubtraction.
	visitPlusSubtraction(ctx) {
	  return 
	}


	// Visit a parse tree produced by TranslateParser#identificador.
	visitIdentificador(ctx) {
	  return 
	}


	// Visit a parse tree produced by TranslateParser#dataType.
	visitDataType(ctx) {
	   console.log("tipo de dato");
	   const dataType = ctx.getText()
	   console.log("Tipo de dato actual", dataType);
	   let newDataType = ''
	   if(dataType.includes('int')){newDataType='num'}
	   else if(dataType.includes('string')){newDataType='vul'}
	   else{newDataType='v'}
	   console.log(newDataType);
	   return newDataType
	}


	// Visit a parse tree produced by TranslateParser#simbolos.
	visitSimbolos(ctx) {
	  return 
	}



}