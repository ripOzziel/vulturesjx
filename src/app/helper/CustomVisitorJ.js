
import JasminVisitor from '../../grammar/JasminVisitor.js';
import { memoria } from "./Memoria.js";
import { errores } from "./Errores.js";
import { impresiones } from "./Impresiones.js";
import antlr4 from "antlr4";

// This class defines a complete generic visitor for a parse tree produced by TranslateParser.

export default class CustomVisitorJ extends JasminVisitor {
		constructor(){
			super();
			this.translation = ''; // Variable para almacenar la traducción
			this.variableCount = 0;
			this.variableMap = new Map();
			this.labelCounter = 0;
			this.elseIfs =[]
			this.isWhile = false
			this.conditionalsIf = []
			this.conditionalsElseIf = []
		}
		getNextLabel() {
			return `L${this.labelCounter++}`;
		}
		
	// Visit a parse tree produced by TranslateParser#prog.
        visitProg(ctx) {
         // Inicia la traducción con la apertura del bloque de código
		 console.log("inicio");
		 this.translation += '.class public Hiram \n.super java/lang/Object\n\n'
		 this.translation += '.method public static main([Ljava/lang/String;)V\n'
		 this.translation += '.limit stack 10\n.limit locals 10\n'
		
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

				}console.log("cantidad de contents");
				console.log(ctx.content().length);
			}
		}

		// Agrega el cierre del bloque de código
		this.translation += 'return\n.end method'
		console.log("final");
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
		let nuevaDeclaracion=''
		const id = ctx.ID().getText()
		const tipoDato = ctx.dataType().getText()
		memoria[id]={identificador:id, valor:0, tipoDeDato: tipoDato, contador: this.variableCount}
		this.variableCount+=1
		nuevaDeclaracion += 'iconst_0\n'
		nuevaDeclaracion += `istore_${memoria[id].contador}\n`

		
	  return  nuevaDeclaracion
	}


	// Visit a parse tree produced by TranslateParser#declAndAssig.
	visitDeclAndAssig(ctx) {
		console.log("Declaracion y asignacion");
		try{
			let nuevaDeclaracion=''
			const regExpString = /^([a-zA-Z0-9\s]+)$/;
			const regExpChar = /^'.'$/;
	
			const tipoDato = ctx.dataType().getText() //tipo de dato de la declarcion
			const corroborar = ctx.ID()	//variable para ver si lo que se escribio es un id
			console.log("Para corroborar: " + corroborar);
			if(corroborar === null){
				throw new Error("Ingresaste algo diferente a un id, corrobora por favor.")
			}
			const id = ctx.ID().getText();
			const regExp = /[*+-/]+/
			if(regExp.test(id)){
				throw new Error("Los Id's no pueden tener operadores matematicos")
			}
			console.log("Este es el id");
			console.log(id);
			if(memoria[id] != undefined){
				console.log("Ya existe, no se puede declarar");
				throw new Error("El id '" + id + "' ya existe, no se puede declarar")
			}
			else{
	
				if(ctx.exp()===null)
				{
					throw new Error("No pusiste ningun valor para la variable")
				}
				else{
					const nuevoValor = this.visit(ctx.exp(0));
					console.log("nuevo valor: " + this.visit(ctx.exp(0) ));
					if(tipoDato==='num'){

							console.log("si lo es");
							memoria[id]={identificador:id, valor:Number(nuevoValor), tipoDeDato: tipoDato, contador: this.variableCount}
							this.variableCount+=1
							nuevaDeclaracion += 'bipush '+nuevoValor +'\n'
							nuevaDeclaracion += `istore_${memoria[id].contador}\n`
							console.log(nuevaDeclaracion);
							return nuevaDeclaracion

					
					}
					else if(tipoDato==='vul'){
						if(regExpString.test(nuevoValor))
						{
							memoria[id]={identificador:id, valor:String(nuevoValor), tipoDeDato: tipoDato, contador: this.variableCount}
							this.variableCount += 1
							nuevaDeclaracion += `ldc "${memoria[id].valor}"\n`
							nuevaDeclaracion += `astore_${memoria[id].contador}\n`
							return nuevaDeclaracion
						}
						else{
							console.log("vul solo acepta cadenas de texto");
							throw new Error("vul solo acepta cadenas de texto")
						}
					}
					else if(tipoDato==='v'){
						if(regExpChar.test(nuevoValor)){
							memoria[id]={identificador:id, valor:nuevoValor, tipoDeDato: tipoDato}
						}
						else{
							console.log(object);
							throw new Error("v solo acepta caracteres")
						}
					}
					
					else{
						throw new Error("Ingresaste mal el tipo de dato")
					}
					console.log("Memoria");
					console.log(memoria);
					console.log(String(memoria[id].identificador));
					return String(memoria[id].identificador);
				}
			}
		}catch(error){
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
		}

	}


	// Visit a parse tree produced by TranslateParser#asignacion.
	visitAsignacion(ctx) {

		console.log("asignacion");
		try{
			let nuevaDeclaracion=''
			const regExpChar = /^'.'$/;
			const expresionRegular = /^([a-zA-Z0-9\s]+)$/;
			const id = ctx.ID().getText();
			console.log("este es el id: "+ id);
			console.log(memoria);
			if(memoria[id] != undefined){
				console.log("el id a tratar: ");
				console.log(memoria[id].identificador);
				const nuevoValor = this.visit(ctx.exp(0));
				console.log("Nuevo valor: " + nuevoValor);
				if(memoria[id].tipoDeDato === 'num'){
					memoria[id].valor=Number(nuevoValor)
					nuevaDeclaracion += `bipush ${memoria[id].valor}\n`
					nuevaDeclaracion += `istore_${memoria[id].contador}\n`
					return nuevaDeclaracion
				}
				else if(memoria[id].tipoDeDato==='vul')
				{
					console.log("Es un vul");
					if(expresionRegular.test(nuevoValor))
					{
						memoria[id].valor=String(nuevoValor)
						nuevaDeclaracion += `ldc "${memoria[id].valor}"\n`
						nuevaDeclaracion += `astore_${memoria[id].contador}\n`
						return nuevaDeclaracion
					}
					else{throw new Error("vul solo acepta cadenas de texto")}
				}
				else if(memoria[id].tipoDato==='v')
				{
					console.log("Es un v");
					if(regExpChar.test(nuevoValor)){memoria[id].valor=nuevoValor}
				}
	
				
				console.log("Valor del id Nuevo: " + nuevoValor);
				return nuevoValor;
			}
			else{ 
				console.log("La variable no ha sido declarada");
				throw new Error("Variable '" + id + "' no ha sido declarada")
			}
		}catch(error){
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
		}
		
	}

	visitWhileSentencia(ctx) {
		this.isWhile = true
		console.log("Ciclo while");
		let jasminCode =''
		const startLabel = this.getNextLabel();
		const endLabel = this.getNextLabel();
		
		const condition = this.visit(ctx.condition());
		jasminCode += `${startLabel}: \n`;
		jasminCode += condition;
		jasminCode += `${endLabel}\n`
		this.isWhile = false
		jasminCode += this.visit(ctx.content()).join('\n') +'\n'
		jasminCode += `goto ${startLabel}\n`
		jasminCode += `${endLabel}:\n`
		return jasminCode
		
		
	  }
  
  
	visitIncremento(ctx) {
		let jasminCode = '';
		const varName = ctx.ID().getText();
	
		if (memoria[varName]) {
			
			// Incrementar el valor
			jasminCode += `iinc ${memoria[varName].contador} 1\n`;
		} else {
			throw new Error('La variable "' + varName + '" no ha sido declarada');
		}
	
		return jasminCode;
	}
	// Visit a parse tree produced by TranslateParser#decremento.
	visitDecremento(ctx) {
		let jasminCode = '';
		const varName = ctx.ID().getText();
	
		if (memoria[varName]) {
			
			// Incrementar el valor
			jasminCode += `idec ${memoria[varName].contador} 1\n`;
		} else {
			throw new Error('La variable "' + varName + '" no ha sido declarada');
		}
	
		return jasminCode;
	}
	visitMasigual(ctx) {
		try{
			let jasminCode = ''

			const varName = ctx.ID().getText();
			
			if(!isNaN(varName)){
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede incrementar`)

			}
			if (memoria[varName]) {
				jasminCode += `iload_${memoria[varName].contador}\n`
				if(isNaN(ctx.atom(0).getText())){
					console.log("no es nuemero");
					console.log(ctx.atom().getText());
					if(memoria[ctx.atom(0).getText()]){
						jasminCode += `iload_${memoria[ctx.atom().getText()].contador}\n`
					}
				}
				else{
					jasminCode += `bipush ${this.visit(ctx.atom(0))}\n`

				}
				jasminCode += `iadd\n`
				jasminCode += `istore_${memoria[varName].contador}\n`

			} else {
				throw new Error('La variable "' + varName + '" no ha sido declarada');
			}
		
			return jasminCode;
			}
			catch(error){
				// Manejar el error y detener la compilación
				errores.push(error.message);
				throw new Error("Detenido debido a errores de compilación");
			}
	  }
	  visitMenosigual(ctx) {
		try{
			let jasminCode = ''

			const varName = ctx.ID().getText();
			
			if(!isNaN(varName)){
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede incrementar`)

			}
			if (memoria[varName]) {
				jasminCode += `iload_${memoria[varName].contador}\n`
				if(isNaN(ctx.atom(0).getText())){
					console.log("no es nuemero");
					console.log(ctx.atom().getText());
					if(memoria[ctx.atom(0).getText()]){
						jasminCode += `iload_${memoria[ctx.atom().getText()].contador}\n`
					}
				}
				else{
					jasminCode += `bipush ${this.visit(ctx.atom(0))}\n`

				}
				jasminCode += `isub\n`
				jasminCode += `istore_${memoria[varName].contador}\n`

			} else {
				throw new Error('La variable "' + varName + '" no ha sido declarada');
			}
		
			return jasminCode;
			}
			catch(error){
				// Manejar el error y detener la compilación
				errores.push(error.message);
				throw new Error("Detenido debido a errores de compilación");
			}
	  }
	  visitSentenciaIf(ctx) {
		  //this.isWhile =false
		  this.elseIfs =[]
		  let jasminCode = '';
		  const ifLabel = this.getNextLabel();
		  const endLabel = this.getNextLabel();
		  const andLabel = this.getNextLabel()
		  const elseifLabel = this.getNextLabel();	
		  const startConditionElseIf = this.getNextLabel()
		  const elseLabel = this.getNextLabel()
        const numElseIf = ctx.ELSEIF() ? ctx.ELSEIF().length : 0;
		console.log(this.visit(ctx.condition(0)));
		this.conditionalsIf.push(this.visit(ctx.condition(0)))
        const firstCondition = ctx.condition(0);
		const logicalExpression = firstCondition.logicalExpression();
		const logic = logicalExpression ? logicalExpression.logic : null;
		if(logic){
			if(ctx.condition(0).logicalExpression().logic.type==27){
   
			   console.log("AND");
			   console.log(this.conditionalsIf);
			   const conditionIf = this.visit(ctx.condition(0)).map((string, index) => index==0? string += `${andLabel}\n goto ${ctx.ELSEIF()? startConditionElseIf: endLabel}\n` : string += `${ifLabel}\n`
		   ).join(`${andLabel}:\n` )
		   jasminCode += conditionIf
	   		}
			else if(ctx.condition(0).logicalExpression().logic.type==28){
				console.log("OR");
				const conditionIf = this.visit(ctx.condition(0)).map(string => string += `${ifLabel}\n`).join('')
				jasminCode += conditionIf
			}

		}
		else{
			console.log("Normal");
			const conditionIf = this.visit(ctx.condition(0)).join('\n')
			jasminCode += conditionIf;
			jasminCode += `${ifLabel}\n`
		}
		if(numElseIf >0)
		{
			
			const andLableElseIf = this.getNextLabel()
			console.log(andLableElseIf);
			for (let i = 0; i < numElseIf; i++) {
				const secondCondition = ctx.condition(i+1);
				const logicalExpression2 = secondCondition.logicalExpression();
				const logic2 = logicalExpression ? logicalExpression2.logic : null;
				const conditionElseIf = this.visit(ctx.condition(i + 1));
				console.log(conditionElseIf);
				if(logic2){
					if(ctx.condition(i+1).logicalExpression().logic.type==27){
   
						console.log("AND");
						jasminCode += startConditionElseIf+':\n'
						jasminCode += conditionElseIf.map((string, index) => index==0? string += `${andLableElseIf}\ngoto ${ctx.ELSE()? elseLabel:endLabel}\n` : string += `${elseifLabel}\n`
						).join(`${andLableElseIf}:\n` )
						this.elseIfs.push(`${elseifLabel}: \n${this.visit(ctx.elseifContent(i)).join('\n') +'\n'}`)

					}
					 else if(ctx.condition(i+1).logicalExpression().logic.type==28){
						 console.log("OR");
						 jasminCode += conditionElseIf.map(string => string += `${ifLabel}\n`).join('')
						 this.elseIfs.push(`${elseifLabel}: \n${this.visit(ctx.elseifContent(i)).join('\n') +'\n'}`)

					 }
		 
				}
				else{
					jasminCode += conditionElseIf;
					jasminCode += `${elseifLabel}\n`
					this.elseIfs.push(`${elseifLabel}: \n${this.visit(ctx.elseifContent(i)).join('\n') +'\n'}`)
				}
			}
		}

		if (ctx.ELSE()) {
			jasminCode += elseLabel +':\n'
			jasminCode += this.visit(ctx.elseContent()).join('\n') +'\n';
			jasminCode += `goto ${endLabel}\n`;
			jasminCode += `${ifLabel}:\n`;
			jasminCode += this.visit(ctx.ifContent()).join('\n') + '\n';
			jasminCode += `goto ${endLabel}\n`;
			jasminCode += this.elseIfs.join('\n') +'\n'
		}
		else{
			jasminCode += `goto ${endLabel}\n`;
			jasminCode += `${ifLabel}:\n`;
			jasminCode += this.visit(ctx.ifContent()).join('\n') + '\n';
			jasminCode += `goto ${endLabel}\n`;
			jasminCode += this.elseIfs.join('\n') +'\n'
		}
   
		
		console.log(ifLabel);
        // Generar el bloque else si existe	
		jasminCode+= `${endLabel}:\n`
        return jasminCode;
    }

    visitCondicion(ctx) {
        let jasminCode = '';
        if (ctx.getText() === 'true') {
            jasminCode += 'ldc 1\n';
        } else if (ctx.getText() === 'false') {
            jasminCode += 'ldc 0\n';
        } else if (ctx.logicalExpression()) {
           // jasminCode += this.visit(ctx.logicalExpression());
        }
		console.log(jasminCode);
        return this.visit(ctx.logicalExpression());
    }

    visitLogicalConParentesis(ctx) {
        return this.visit(ctx.logicalExpression());
    }
	
    visitExpresionLogica(ctx) {
		
        let jasminCode = []
        jasminCode.push(this.visit(ctx.relationalExpression(0)));
		console.log(jasminCode);
        if (ctx.relationalExpression(1)) {
            jasminCode.push(this.visit(ctx.relationalExpression(1)))
			console.log(jasminCode);
			return jasminCode
        }
		console.log(jasminCode);
        return jasminCode;
    }

    visitRelacionalConParentesis(ctx) {
        return this.visit(ctx.relationalExpression());
    }

    visitExpresionRelacional(ctx) {
		console.log("expresion relacional");
        let jasminCode = '';
		const num1 = ctx.exp(0).getText()
		const num2 = ctx.exp(1).getText()
		console.log(num1);
		let exp1=''
		let exp2=''
		if(isNaN(num1)){
			if(memoria[num1]){
				exp1 =`iload_${memoria[num1].contador}\n`
			}
			else if(num1.includes('%')){
			console.log("si incluye");
				exp1 = `ldc ${this.visit(ctx.exp(0))}\n`
			}
			else{
				throw new Error('La variable "' + num1 + '" no ha sido declarada')
			}
		}
		else{
			exp1 = `ldc ${this.visit(ctx.exp(0))}\n`
		}

        if (ctx.exp(1)) {
            if(isNaN(num2)){
				if(memoria[num2]){
					exp2 =`iload_${memoria[num2].contador}\n`
				}
				else{
					throw new Error('La variable "' + num2 + '" no ha sido declarada')
				}
			}
			else{
				exp2 = `ldc ${this.visit(ctx.exp(1))}\n`
			}
            jasminCode += exp1;
            jasminCode += exp2;
			const insideWhile = this.isWhile
			console.log(insideWhile);
            switch (ctx.relation.type) {
				case 21: // IGUAL
					jasminCode += insideWhile ? 'if_icmpne ' : 'if_icmpeq ';
					break;
				case 22: // DISTINTO
					jasminCode += insideWhile ? 'if_icmpeq ' : 'if_icmpne ';
					break;
				case 23: // MAYOR
					jasminCode += insideWhile ? 'if_icmple ' : 'if_icmpgt ';
					break;
				case 24: // MENOR
					jasminCode += insideWhile ? 'if_icmpge ' : 'if_icmplt ';
					break;
				case 25: // MAYORIGUAL
					jasminCode += insideWhile ? 'if_icmplt ' : 'if_icmpge ';
					break;
				case 26: // MENORIGUAL
					jasminCode += insideWhile ? 'if_icmpgt ' : 'if_icmple ';
					break;
                default:
                    throw new Error('Operación relacional no soportada');
            }
        } else {
            jasminCode += exp1;
        }
		console.log(jasminCode);
        return jasminCode;
    }

    visitVerdaderoOFalso(ctx) {
        return ctx.TRUE() ? 'ldc 1\n' : 'ldc 0\n';
    }
	

	// Visit a parse tree produced by TranslateParser#impresion.
	visitImpresion(ctx) {
        console.log("Impresion")
		let nuevaImpresion=''
		if(ctx.STRING())
		{
			console.log("tan solo es un string");
			const string = ctx.STRING().getText().slice(1,-1)
			nuevaImpresion += 'getstatic java/lang/System/out Ljava/io/PrintStream;\n'
			nuevaImpresion += `ldc "${string}"\n`
			nuevaImpresion += 'invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V'
			return nuevaImpresion
		}
		if(ctx.exp()){
			console.log("Solo una expresion");
			const numero = ctx.exp(0).getText()
			console.log(ctx.exp(0).getText());
			if(isNaN(numero))
			{
				if(memoria[numero]){
					impresiones.push(memoria[numero].valor)
					nuevaImpresion += 'getstatic java/lang/System/out Ljava/io/PrintStream;\n'
					nuevaImpresion += `iload_${memoria[numero].contador}\n`
					nuevaImpresion += 'invokevirtual java/io/PrintStream/println(I)V\n'
					return nuevaImpresion
				}
				else{
					throw new Error('La variable "' + numero + '" no ha sido declarada')
				}
			}
			else{
				impresiones.push(numero)
				nuevaImpresion += 'getstatic java/lang/System/out Ljava/io/PrintStream;\n'
				nuevaImpresion += `bipush ${numero}\n`
				nuevaImpresion += 'invokevirtual java/io/PrintStream/println(I)V\n'
				return nuevaImpresion
			}
		}
		if(ctx.concat())
		{ 
			nuevaImpresion += this.visit(ctx.concat())
			return nuevaImpresion
		}
	}

	visitConcatenacion(ctx) {
		console.log("visitConca");
		let nuevaConcatenacion = ''
		const atom = this.visit(ctx.atom())
		console.log(ctx.atom(0).getText().slice(1,-1));
		nuevaConcatenacion += 'getstatic java/lang/System/out Ljava/io/PrintStream;\n'
		for (let i = 0; i < atom.length; i++) {
			
			if(isNaN(ctx.atom(i).getText()))
			{	
				const texto = ctx.atom(i).getText()
				if(memoria[texto])
				{
					nuevaConcatenacion += `iload_${memoria[texto].contador}\n`
					nuevaConcatenacion += 'invokestatic java/lang/String/valueOf(I)Ljava/lang/String;\n'
				}
				else{
					
					nuevaConcatenacion += `ldc "${atom[i]}"\n`
				}
			}
			else{
				nuevaConcatenacion += `bipush ${atom[i]}\n`
				nuevaConcatenacion += 'invokestatic java/lang/String/valueOf(I)Ljava/lang/String;\n'
			}	
		}
		nuevaConcatenacion += 'invokevirtual java/lang/String/concat(Ljava/lang/String;)Ljava/lang/String;\n'
		nuevaConcatenacion += 'invokevirtual java/io/PrintStream/println(Ljava/lang/String;)V\n'
		return nuevaConcatenacion
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

	visitResiudo(ctx) {
		const numero1 = Number(this.visit(ctx.exp(0)))//encontramos el primer numero usando los indices ([10,undefined,5])
        const numero2 = Number(this.visit(ctx.exp(1))) // de igual manera encontramos el segundo numero        
		const numero1Text = String(this.visit(ctx.exp(0)))
		const numero2Text = String(this.visit(ctx.exp(1)))
		if(numero1Text.match(/[a-z]+/i)){
				
			console.log("Ya vi que es letra el numero 1");
			console.log("Valor de memoria: " + memoria[numero1]);
			if(memoria[numero1Text] != undefined){
				return memoria[numero1Text].valor%numero2
			}
			else{
				console.log("Error en algo");
				return String("error")}


		  }
		  else if(numero2Text.match(/[a-z]+/i)){

			console.log("Ya vi que es letra el numero 2");
			if(memoria[numero2Text ] != undefined){
				return numero1 % memoria[numero2Text].valor;
			}
			else{return String("error")}

		  }
		console.log((numero1%numero2));
		return Number(numero1%numero2)
		
	  }

	//!VISITAS EXTRAS
	visitNumero(ctx) {
		// Verifica si el número tiene un signo negativo
        if (ctx.getText().startsWith('-')) {
            // Si es negativo, convierte el texto del contexto a un número negativo
            return -parseFloat(ctx.getText().substring(1));
        } else {
            // Si no es negativo, convierte el texto del contexto a un número normal
            return parseFloat(ctx.getText());
        }
	}
	visitString(ctx) {return String(ctx.getText().slice(1,-1));}
	visitChar(ctx) {return String(ctx.getText());}
	visitIdentificador(ctx) {
		console.log("VisitandoId");
		const id = ctx.getText()
		console.log(id);
		if(memoria[id]){
			return memoria[id].valor
		}
		else{
			throw new Error('Variable "' + id + '" no declarada')
		}
	}
	visitParentesis(ctx) {
    	let res = this.visit(ctx.exp(0)) 
        if(ctx.exp(1))
		{
			errores.push("Falta un operador")
			return "error"
		}
        return Number(res)
    }
	visitParentesisMultiply(ctx) {
		console.log('entre');
		
			const numero1 = this.visit(ctx.expr(0)) //encontramos el primer numero usando los indices ([[10,undefined,5]])
			const numero2 = this.visit(ctx.expr(1)) // de igual manera encontramos el segundo numero
			const stringNum1 = String(numero1)
			const stringNum2 = String(numero2)
			if(stringNum1.match(/[a-z]+/i)){
			  
			  console.log("Ya vi que es letra el numero 1");
			  if(memoria[numero1] != undefined){return memoria[numero1]*numero2}
			  else{return String("error")}
	
	
			}
			else if(stringNum2.match(/[a-z]+/i)){
	
			  console.log("Ya vi que es letra el numero 2");
			  if(memoria[numero2 ] != undefined){return numero1 * memoria[numero2];}
			  else{return String("error")}
	
			}
			
			return numero1*numero2  ;
	}
	visitTimesDiv(ctx) {
		
		const numero1 = Number(this.visit(ctx.exp(0)))//encontramos el primer numero usando los indices ([10,undefined,5])
        const numero2 = Number(this.visit(ctx.exp(1))) // de igual manera encontramos el segundo numero        
		const numero1Text = String(this.visit(ctx.exp(0)))
		const numero2Text = String(this.visit(ctx.exp(1)))
		
        //usamos el cero y el dos porque arregloNums es un arreglo de arreglos, y hagarramos hasta el indice dos porque el 1 es el signo mas
        if(ctx.operation.type === 9){
          if(numero1Text.match(/[a-z]+/i)){
          
            console.log("Ya vi que es letra el numero 1");
            if(memoria[numero1Text] != undefined){return memoria[numero1Text].valor*numero2}
            else{return String("error")}


          }
          else if(numero2Text.match(/[a-z]+/i)){

            console.log("Ya vi que es letra el numero 2");
            if(memoria[numero2Text ] != undefined){return numero1 * memoria[numero2Text].valor;}
            else{return String("error")}

          }
          return Number(numero1*numero2) //resultado de la multiplicacion de los numeros
        }
        else{
			
          if(numero1Text.match(/[a-z]+/i)){
            console.log("Ya vi que es letra el numero 1");
            if(memoria[numero1Text] != undefined){return memoria[numero1Text].valor/numero2}
            else{return String("error")}
          }
          else if(numero2Text.match(/[a-z]+/i)){
            console.log("Ya vi que es letra el numero 2");
            if(memoria[numero2Text ] != undefined){return numero1 / memoria[numero2Text].valor;}
            else{return String("error")}
		  }
          return Number(numero1/numero2) //resultado de la division de los numeros
        }     
	}
	visitPlusSubtraction(ctx) {
        
        const numero1 = Number(this.visit(ctx.exp(0)))//encontramos el primer numero usando los indices ([10,undefined,5])
        const numero2 = Number(this.visit(ctx.exp(1))) // de igual manera encontramos el segundo numero        
		const numero1Text = String(this.visit(ctx.exp(0)))
		const numero2Text = String(this.visit(ctx.exp(1)))
		console.log(numero1Text);
        console.log("En suma");
        if(ctx.operation.type === 7){
			if(numero1Text.match(/[a-z]+/i)){
				
				console.log("Ya vi que es letra el numero 1");
				console.log("Valor de memoria: " + memoria[numero1]);
				if(memoria[numero1Text] != undefined){return memoria[numero1Text].valor+numero2}
				else{
					console.log("Error en algo");
					return String("error")}


         	 }
          	else if(numero2Text.match(/[a-z]+/i)){

				console.log("Ya vi que es letra el numero 2");
				if(memoria[numero2Text ] != undefined){return numero1 + memoria[numero2Text].valor;}
				else{return String("error")}

         	 }
			console.log((numero1+numero2));
			return Number(numero1+numero2) //resultado de la suma de los numeros
        }
        else{
          if(numero1Text.match(/[a-z]+/i)){
          
            console.log("Ya vi que es letra el numero 1");
            if(memoria[numero1Text] != undefined){return memoria[numero1Text].valor-numero2}
            else{return String("error")}


          }
          else if(numero2Text.match(/[a-z]+/i)){

            console.log("Ya vi que es letra el numero 2");
            if(memoria[numero2Text] != undefined){return numero1 - memoria[numero2Text].valor;}
            else{return String("error")}

          }
          return numero1-numero2 //resultado de la resta de los numeros
        }
    
	}
	visitString2(ctx) {return String(ctx.getText().slice(1,-1));}


}