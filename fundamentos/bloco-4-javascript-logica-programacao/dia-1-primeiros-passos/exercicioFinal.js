/*
EXERCÍCIO 1 	

Nos exercícios de hoje, você vai fazer quinze pequenos programas. 
Todos trabalham a lógica condicional (if/else e switch/case), 
operadores aritméticos (+, -, *, /, %) e operadores lógicos (>, <, &&, ||). 
Para que consiga executar seus códigos recomendamos que utilize a extensão 
Code Runner, você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code.
*/

// 1 - Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo 
// com os valores que serão operados. Faça programas para:

/*
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

const a = 5;
const b = 11;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

/*
EXERCÍCIO 2

Faça um programa que retorne o maior de dois números. 
Defina no começo do programa duas constantes com os valores que serão comparados.
*/

const valor1 = 50;
const valor2 = 63;

if (valor1 > valor2) {
    console.log(valor1);
} else if (valor2 > valor1) {
    console.log(valor2);
} else {
    console.log("NULL");
}

/*
EXERCÍCIO 3

Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes 
com os valores que serão comparados.

*/

const a1 = 25;
const a2 = 33;
const a3 = 45;

if (a1 > a2 && a1 > a3) {
    console.log(a1);
} else if (a2 > a1 && a2 > a3) {
    console.log(a2);
} else if (a3 > a1 && a3 > a2) {
    console.log(a3)
} else {
    console.log("0");
}

/*
Faça um programa que, dado um valor definido numa constante, retorne 
"positive" se esse valor for positivo, "negative" se for negativo 
e "zero" caso contrário.
*/

const numbers = 25;

if (numbers >= 0) {
    console.log("positive");
} else if (numbers < 0) {
    console.log("negative");
}