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

vulture puede tener 3 tipos de variables:
* num: can contain integer and float numeric values.
* vul:  may contain text strings.
* v: can contain single characters such as 'a'.

So, for example, to make a program that just generates one variable with a specific value you could use the following code:
```
hiram{
    num a = 10
}
```

# INTERNAL DEVELOPMENT ONLY

ANTL4 Setup
===========
Run `antlr -Dlanguage=JavaScript -o ./src/ -visitor -no-listener ./grammar/Language.g4` every time the grammar is changed on the project

NEXT.js Project setup
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