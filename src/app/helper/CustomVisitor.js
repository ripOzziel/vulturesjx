//Coloca la copia del visitor para que no se borre a la hora de modificacion del archivo
import ArrayInitVisitor from "../../grammar/ArrayInitVisitor.js";
import { memoria } from "./Memoria.js";
import { errores } from "./Errores.js";
import { impresiones } from "./Impresiones.js";
import { memo } from "react";

export default class CustomVisitor extends ArrayInitVisitor{
	visitProg(ctx) {
		console.log("prog");
		return this.visit(ctx.content())
	}
	visitContent(ctx) {
		console.log("content");
		
		return this.visitChildren(ctx)
	}
  
	/**
	   * La funcion declaracion recibirá un texto a analizar cuya sintaxis es:
	   * declaration: dataType (ID|NUMBER) simbolos? FIN?
	   * La función se encargará de guardar en un objeto de objetos (MEMORIA) la variable declarada,
	   * las propiedades del objeto serán el identificador, tipo de dato y valor.
	   * En declaracion se le asignara un valor por default al crear la variable.
	   *
	   * @param {Object} ctx 
	   * @returns La funcion Declaracion retornará el identificador de la variable
	   * 
	   */
	visitDeclaracion(ctx) {
		console.log("declaracion");
		try{

		
		if(ctx.simbolos()){
			throw new Error("No puedes usar simbolos en una declaracion: " + ctx.simbolos().getText())
		}
		if (ctx.NUMBER()){
			//errores.push("Una variable no puede ser numero")
			throw new Error("Una variable no puede ser numero")
		}
		const tipoDato = ctx.dataType().getText() //tipo de dato de la declarcion
		const corroborar = ctx.ID()	//variable para ver si lo que se escribio es un id
		console.log("Para corroborar: " + corroborar);
		
		if(corroborar === null){
			throw new Error("Ingresaste algo diferente a un id, corrobora por favor.")
			return String("No es un id");
		}
		const id = ctx.ID().getText();
		const regExp = /[*+-/]+/
		if(regExp.test(id)){
			throw new Error("Los Id's no pueden tener operadores matematicos")
			return String("Los Id's no pueden tener operadores matematicos");
		}
		console.log("Este es el id");
		console.log(id);
		if(memoria[id] != undefined){
			console.log("Ya existe, no se puede declarar");
			throw new Error("El id '" + id + "' ya existe, no se puede declarar")
			return String("Ya declarada")
		}
		else
		{
			if(tipoDato==='num'){memoria[id]={identificador:id, valor:0, tipoDeDato: tipoDato}}
			else if(tipoDato==='vul'){memoria[id]={identificador:id, valor:"", tipoDeDato: tipoDato}}
			else if(tipoDato==='v'){memoria[id]={identificador:id, valor:"", tipoDeDato: tipoDato}}
			else{
				throw new Error("Ingresaste mal el tipo de dato")
				return String("Algo esta mal");
			}
			console.log("Memoria");
			console.log(memoria);
			console.log(String(memoria[id].valor));
			return String(memoria[id].identificador);
		}
	}catch(error){
		  // Manejar el error y detener la compilación
		  errores.push(error.message);
		  throw new Error("Detenido debido a errores de compilación");
	}
		clg
	}

	/**
	   * La función DeclAndAssig permite declarar una variable y asignarle un valor
	   * en la misma linea de codigo.
	   * La sintaxis es : declarationAndAssignament: dataType (ID|NUMBER) EQUALS exp? FIN? #declAndAssig;
	   * Si todo se hace de manera correcta se guardara la variable junto a su tipo 
	   * de dato, valor e identificador.
	   * @param {Object} ctx 
	   * @returns Variable guardada en memoria
	   */
	visitDeclAndAssig(ctx) {
		console.log("Declaracion con asignacion");
		try{
			const regExpString = /^"([a-zA-Z0-9\s]+)"$/;
			const regExpChar = /^'.'$/;
	
			const tipoDato = ctx.dataType().getText() //tipo de dato de la declarcion
			const corroborar = ctx.ID()	//variable para ver si lo que se escribio es un id
			console.log("Para corroborar: " + corroborar);
			if(corroborar === null){
				throw new Error("Ingresaste algo diferente a un id, corrobora por favor.")
				return String("No es un id");
			}
			const id = ctx.ID().getText();
			const regExp = /[*+-/]+/
			if(regExp.test(id)){
				throw new Error("Los Id's no pueden tener operadores matematicos")
				return String("Los Id's no pueden tener operadores matematicos");
			}
			console.log("Este es el id");
			console.log(id);
			if(memoria[id] != undefined){
				console.log("Ya existe, no se puede declarar");
				throw new Error("El id '" + id + "' ya existe, no se puede declarar")
				return String("Ya declarada")
			}
			else{
	
				if(ctx.exp()===null)
				{
					throw new Error("No pusiste ningun valor para la variable")
					return String("Error")
				}
				else{
					const nuevoValor = this.visit(ctx.exp(0));
					console.log("nuevo valor: " + this.visit(ctx.exp(0) ));
					if(tipoDato==='num'){
						//if(!isNaN(nuevoValor))
						//{
							console.log("si lo es");
							memoria[id]={identificador:id, valor:Number(nuevoValor), tipoDeDato: tipoDato}
						//}
						//else{
						//	throw new Error("Solo puedes asignar numeros al tipo de dato int")
						//	return String("No es un numero")
						//}
						
						//memoria[id]={identificador:id, valor:Number(nuevoValor), tipoDeDato: tipoDato}
		
					}
					else if(tipoDato==='vul'){
						if(regExpString.test(nuevoValor))
						{
							memoria[id]={identificador:id, valor:String(nuevoValor), tipoDeDato: tipoDato}
						}
						else{
							throw new Error("vul solo acepta cadenas de texto")
							return String("vul solo acepta cadenas de texto")
						}
					}
					else if(tipoDato==='v'){
						if(regExpChar.test(nuevoValor)){
							memoria[id]={identificador:id, valor:nuevoValor, tipoDeDato: tipoDato}
						}
						else{
							throw new Error("v solo acepta caracteres")
							return String("v solo acepta caracteres")
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
	  
	/**
	   * La función visitAsignacion trabajara con un variables que ya estan en la memoria,
	   * por lo tanto identificara si el nombre de la variable ya existe para poder reasignarle 
	   * un valor nuevo, en caso de que no funcione por mal trato de sintaxis o nombre de varible
	   * habra manejo de errores.
	   * @param {Object} ctx 
	   * @returns El valor de la variable
	   */
	visitAsignacion(ctx) {
		console.log("asignacion");
		try{
			const regExpChar = /^'.'$/;
			const expresionRegular = /^"([a-zA-Z0-9\s]+)"$/;
			const id = ctx.ID().getText();
			console.log("este es el id: "+ id);
			console.log(memoria);
			if(memoria[id] != undefined){
				console.log("el id a tratar: ");
				console.log(memoria[id].identificador);
				const nuevoValor = this.visit(ctx.exp(0));
				console.log("Nuevo valor: " + nuevoValor);
				if(memoria[id].tipoDeDato === 'num'){
					/*if(!isNaN(nuevoValor)){memoria[id].valor=Number(nuevoValor)}
					else{errores.push("int solo acepta numeros");}
					*/
					memoria[id].valor=Number(nuevoValor)
				}
				if(memoria[id].tipoDeDato==='vul')
				{
					console.log("Es un vul");
					if(expresionRegular.test(nuevoValor)){memoria[id].valor=String(nuevoValor)}
					else{throw new Error("vul solo acepta cadenas de texto")}
				}
				if(memoria[id].tipoDato==='v')
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
				return String("No declarada")
			}
		}catch(error){
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
		}
		
		
		
	}

	  //!AQUI SE TRABAJA EL WHILE
	visitWhileSentencia(ctx) {
		try{

			console.log("CIclo While");
			//console.log(ctx.content().getText());
			let condicion = this.visit(ctx.condition())
			if(condicion){
				while (condicion) {
					this.visit(ctx.content())
					condicion = this.visit(ctx.condition());
				}
			}
			return ;
		}
		catch(error){
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
		}
	}  
	visitSentenciaIf(ctx) {
		const condicionIf = this.visit(ctx.condition(0))
		if(condicionIf){
		
			this.visit(ctx.ifContent())
			return
		} 
		
		else{
			console.log("else");
			const numElseIf = ctx.ELSEIF() ? ctx.ELSEIF().length : 0;
			if (numElseIf > 0) {
				for (let i = 0; i < numElseIf; i++) {
					if (this.visit(ctx.condition(i + 1))) {
						this.visit(ctx.elseifContent(i));
						return;
					}
				}
			}
			if (ctx.ELSE()) {
				this.visit(ctx.elseContent());
				return;
			}
			console.log("No paso nada");
			return;
		}
	}
	visitCondicion(ctx) {
			console.log("Condicion");
			console.log(ctx.getText());
			if(ctx.getText()=== 'true')
			{
				console.log("Hola");
				return true
			}
			else if(ctx.getText()==='false')
			{
				return false
			}
			else{
				console.log(ctx.logicalExpression().getText());
				const resultLogical1 =this.visit(ctx.logicalExpression(0))	  
				console.log(this.visit(ctx.logicalExpression()));
				if(ctx.NOT() !== null){return !resultLogical1}
				else{return resultLogical1}
			}
			
	
	}
	visitLogicLogical(ctx) {
		console.log("Logic Logical");
		console.log(this.visit(ctx.logicalExpression()));
		const result1 = this.visit(ctx.logicalExpression(0))
		
		if(ctx.logicalExpression(1) !== null)
		{
			const result2 =this.visit(ctx.logicalExpression(1))
			console.log(result2);
			if(ctx.logic.type === 25){
				console.log("and");
				if(result1 && result2){return true}
				else{return false}
			}
			if(ctx.logic.type === 26){
				if(result1 || result2){return true}
				else{return false}
			}
			
		}
		else if(result1){return true}
		else{return false}
		
	
	
		return this.visitChildren(ctx);
	  }
	visitLogicalConParentesis(ctx) {
		console.log("Expresion logica con parentesis");
    	const expresion = this.visit(ctx.logicalExpression());
		return expresion
	  }
	visitExpresionLogica(ctx) {
		console.log("Expresion logica");
		const resultRelational1 =this.visit(ctx.relationalExpression(0))
		console.log(resultRelational1);
		
		if(ctx.relationalExpression(1) !== null)
		{
			const resultRelational2 =this.visit(ctx.relationalExpression(1))
			console.log(resultRelational2);
			if(ctx.logic.type === 25){
				console.log("and");
				if(resultRelational1 && resultRelational2){return true}
				else{return false}
			}
			if(ctx.logic.type === 26){
				if(resultRelational1 || resultRelational2){return true}
				else{return false}
			}
			
		}
		else if(resultRelational1){return true}
		else{return false}

	}
	// Visit a parse tree produced by ArrayInitParser#relacionalConParentesis.
	visitRelacionalConParentesis(ctx) {
		console.log("Expresion relacional con parentesis");
		const expresion = this.visit(ctx.relationalExpression())
		return expresion
	  }
	visitExpresionRelacional(ctx) {
	  	console.log("Expresion relacional");
		const exp1 = this.visit(ctx.exp(0))
		if(ctx.exp(1)!==null)
		{
			const exp2 = this.visit(ctx.exp(1))
			if(ctx.relation.type===19){
				if(exp1 == exp2){return true}
				else{return false}
			}
			else if(ctx.relation.type ===20)
			{
				if(exp1 != exp2){return true}
				else{return false}
			}
			else if(ctx.relation.type === 21){
				if(exp1>exp2){return true}
				else{return false}
			}
			else if(ctx.relation.type === 22){
				if(exp1<exp2){return true}
				else{return false}
			}
			else if(ctx.relation.type === 23){
				if(exp1>=exp2){return true}
				else{return false}
			}
			else if(ctx.relation.type === 24){
				if(exp1<=exp2){return true}
				else{return false}
			}
		}
		else{
			return true
		}
	}
	visitVerdaderoOFalso(ctx) {
		console.log(ctx.TRUE());
		if(this.visit(ctx.TRUE()))
		{
			console.log('entramooss');
			return true;
		}
		else{
			return false;
		}
	}
	visitConcatenacion(ctx) {
		console.log("visitConca");
		console.log(this.visit(ctx.atom()).join(''));
		const concate = this.visit(ctx.atom()).join('')
		impresiones.push(concate)
			
		return concate;
	}
	visitImpresion(ctx) {
		console.log("impresion");
		if(ctx.STRING())
		{
			console.log("tan solo es un string");
			const string = ctx.STRING().getText().slice(1,-1)
			console.log(string);
			impresiones.push(string)
			return string
		}
		if(ctx.exp()){
			console.log("Solo una expresion");
			const numero = this.visit(ctx.exp(0))
			if(isNaN(numero))
			{
				if(memoria[numero]){
					impresiones.push(memoria[numero].valor)
					return numero
				}
				else{
					throw new Error('La variable "' + numero + '" no ha sido declarada')
				}
			}
			else{

				impresiones.push(numero)
				return numero
			}
		}
		if(ctx.concat())
		{ 
			//aqui se llama al visit concatenacion
		}
		
		
		//console.log(this.visit(ctx.exp(0) ));
		return this.visitChildren(ctx);
	}
	visitDataType(ctx) {
		console.log("Datatype broooo");
		try{
			throw new Error("Error, declaracion incompleta")
			return this.visitChildren(ctx);
		}
		catch(error){
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
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
        if(ctx.operation.type === 7){
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
        if(ctx.operation.type === 5){
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
	visitResiudo(ctx) {
		const numero1 = Number(this.visit(ctx.exp(0)))//encontramos el primer numero usando los indices ([10,undefined,5])
        const numero2 = Number(this.visit(ctx.exp(1))) // de igual manera encontramos el segundo numero        
		const numero1Text = String(this.visit(ctx.exp(0)))
		const numero2Text = String(this.visit(ctx.exp(1)))
		if(numero1Text.match(/[a-z]+/i)){
				
			console.log("Ya vi que es letra el numero 1");
			console.log("Valor de memoria: " + memoria[numero1]);
			if(memoria[numero1Text] != undefined){return memoria[numero1Text].valor%numero2}
			else{
				console.log("Error en algo");
				return String("error")}


		  }
		  else if(numero2Text.match(/[a-z]+/i)){

			console.log("Ya vi que es letra el numero 2");
			if(memoria[numero2Text ] != undefined){return numero1 % memoria[numero2Text].valor;}
			else{return String("error")}

		  }
		console.log((numero1%numero2));
		return Number(numero1%numero2)
		
	  }
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

	visitIncremento(ctx) {
		try{
			const variable = ctx.ID().getText()
			if(!isNaN(variable)){
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede incrementar`)
			}
			if(memoria[variable] !== undefined){
				memoria[variable].valor += 1
				console.log(memoria[variable]);
				return
			}
			else{
				throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable}, no ha sido declarada`)
			}
		}
		catch(error){
			// Manejar el error y detener la compilación
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
		}
		
	  }
	visitDecremento(ctx) {
		try{
			const variable = ctx.ID().getText()
			if(!isNaN(variable)){
				throw new Error(`Error en la linea ${ctx.start.line}, no se puede incrementar`)
			}
			if(memoria[variable] !== undefined){
				memoria[variable].valor -= 1
				console.log(memoria[variable]);
				return
			}
			else{
				throw new Error(`Error en la linea ${ctx.start.line}, la variable ${variable}, no ha sido declarada`)
			}
		}
		catch(error){
			// Manejar el error y detener la compilación
			errores.push(error.message);
			throw new Error("Detenido debido a errores de compilación");
		}
	}
	visitSimb(ctx) {return this.visitChildren(ctx);}
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
	}