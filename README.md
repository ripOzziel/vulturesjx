Welcome to Vulture ✞
=========================================

Vulture ✞ is a basic programming language with a syntax similar to Javascript.

## Getting Started
To start coding in Vulture ✞, just use the `Hiram` command followed by curly braces:
```
hiram{

}
```

hiram is designed to be your main function, like in C it would be "void main()"

### **Variable declarations:**

The declarations have the following syntax:
"DATA-TYPE ID", like JavaScript, the semicolon is not necessary, but you can use it if it is more comfortable for you.
In vulture you can also make declaration and declaration with assignment, with a syntax like:
"DATA-TYPE ID = EXPRESSION" .
The declarations, if a defined value is not used, depending on the data-type, a default value will be assigned.

Vulture can have 3 types of variables:
* num: can contain integer and float numeric values(default value: 0).
* vul:  may contain text strings (default value: " ").
* v: can contain single characters such as 'a' (default value: ' ').

So, for example, to make a program that just generates one variable with a specific value you could use the following code:
```
hiram{
    num a = 10
}
```
You can also assign a value to variables after being declared, using the id of the declared variable and assigning a value to it, as follows:
```
hiram{
    num a 
	a = 10
}
```
### **Prints**
In order to make a console print, the command `printPlease` will be used followed by `(`, an expression (string, variables, basic operations, and concatenations) ending with `)`.

The following example shows an example of an operation (`sum`) but using a variable (`a`) extracting the value of the variable to do the operation and printing the result (`60`) in the console.
```
hiram{
	num  a
	a = 30
	printPlease(a+30)
}
```
### **Conditional sentences**
#### If Statement
The `if` conditional works to compile code with a condition, which is reduced to a boolean value, if the result of the condition is `true` the code is compiled within the braces, if it is `false` it jumps to the end of the braces.

In the following example you can see the condition if `a < 10` will compile the code inside the braces, if not, it jumps to the end. In this case it will enter and print `"si se pudo"`.

```
hiram{
	num a = 8
	if(a<10)
	{
		printPlease("si se pudo")
	}
}
```
#### Else If Statement
You can chain multiple condition evaluations using else if, so if the first condition its not a truthy value you can still evaluate other conditions before taking and ultimate decision.

In the following example, since the first if condition is not met, it will go to the next option which is elseif, where in this case the if condition is `true` and the code runs inside the braces.

```
hiram{
num a = 10
if(a<9)
{
	printPlease("IF")
}
elseif(a==10)
{
	printPlease("ELSEIF")
}
}
```
#### Else Statement
If theres no truthy condition on the conditional chain, the code flow will end on the else code block like at the following example.
```
hiram{
	num a = 11
	if(a<9)
	{
		printPlease("IF")
	}
	elseif(a==10)
	{
		printPlease("ELSEIF")
	}
else{
	printPlease("ELSE")
}
}
```
#### Condition operators
Currently, Vulture has the following condition operators available:
- '>':
- '<'
- '>='
- '<='
- '||'
- '&&'
- '=='
- '!='
- 'true'
- 'false'

### **Loops**
#### Mien loop
The `Mien` loop repeatedly executes a block of code as long as a specified condition is `true`. Before each iteration, the condition is evaluated, and if it is `false`, the loop ends. This allows operations to be performed continuously until a termination criterion is met.

Example:
  ```
  hiram{
  	num a =0
	mien(a<10)
	{
		printPlease(a)
		a++ //incremento
	}
  }
```
  #### Increase and Decrease

Increment works by adding a 1 to the variable before the `++` and assigning that value to the variable
In decrement it works the same only with subtraction (`--`).
# INTERNAL DEVELOPMENT ONLY

ANTL4 Setup
===========
Run `antlr -Dlanguage=JavaScript -o ./src/ -visitor -no-listener ./grammar/ArrayInit.g4` every time the grammar is changed on the project

Next.js Project setup
=====================
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
