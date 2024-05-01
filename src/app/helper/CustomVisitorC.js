
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
		console.log(childrenTranslations);
		const notEmptyChildrenTranslation = childrenTranslations.filter(e => e !== undefined) //eliminamos los nodos vacios que retorna
		console.log(notEmptyChildrenTranslation);
		if (notEmptyChildrenTranslation.length > 0) {
			for (let i = 0; i < notEmptyChildrenTranslation.length; i++) {
				console.log(notEmptyChildrenTranslation[i]);
				if(notEmptyChildrenTranslation[i] !== undefined)
				{
					this.translation += notEmptyChildrenTranslation[i]+'\n';

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
		console.log(this.visitChildren(ctx));
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

	visitWhileSentencia(ctx) {
		console.log("Ciclo while");
		console.log("bajo");
		console.log(this.visit(ctx.content()));
		let nuevoWhile =''
		nuevoWhile += 'mien(' + this.visit(ctx.condition(0))+')\n{\n'
		for (let i = 0; i < ctx.content().length; i++) {
			nuevoWhile += this.visit(ctx.content(i)) + '\n'
		}
		nuevoWhile += '}'
		return nuevoWhile
	  }

	  visitIncremento(ctx) {
		console.log("incremento");
		console.log(ctx.getText());
		return ctx.getText();
	  }
  
  
	  // Visit a parse tree produced by TranslateParser#decremento.
	  visitDecremento(ctx) {
		return ctx.getText()
	  }
  
	// Visit a parse tree produced by TranslateParser#ifStatement.
	visitSentenciaIf(ctx) {
		console.log("IF PURO");
		let dondeParo=0
		let nuevaIf = ''
		const condicionIf = this.visit(ctx.condition(0))
		nuevaIf += 'if(' + condicionIf + ')\n{\n'
		console.log(this.visit(ctx.ifContent()));
		nuevaIf += this.visit(ctx.ifContent()) +'\n}\n'

		const numElseIf = ctx.ELSEIF() ? ctx.ELSEIF().length : 0;
		if(numElseIf >0){
			for (let i = 0; i < numElseIf; i++) {
				nuevaIf+='elseif(' + this.visit(ctx.condition(i+1)) +')\n{\n'
				nuevaIf+= this.visit(ctx.elseifContent(i)) +'\n}\n'
				dondeParo=i
			}
		}
		if(ctx.ELSE()){
			nuevaIf += 'else \n {\n' + this.visit(ctx.elseContent()) + '\n}\n'
		}
		console.log(nuevaIf);
		return nuevaIf
	  }
	// Visit a parse tree produced by TranslateParser#condicion.
	visitCondicion(ctx) {
		console.log("Condicion");
		console.log(ctx.getText());
		return ctx.getText()
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





}