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
EXERCÍCIO 4 

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

/*
EXERCÍCIO 5

🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
*/

const ladoA = 60;
const ladoB = 60;
const ladoC = 60;

let somaAngulo = ladoA + ladoB + ladoC;

let angulosPositivos  = ladoA > 0 && ladoB > 0 && ladoC > 0;

if (angulosPositivos ) {
    if (somaAngulo === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
} else {
    console.log("Erro: ângulo inválido")
}


/*
EXERCÍCIO 6 
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas 
quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

Exemplo: bishop (bispo) -> diagonals (diagonais).
*/

let pecaXadrez = "rei";

switch (pecaXadrez) {
    case "rei":
        console.log("(bispo) -> Pode mover-se em qualquer direção, porem apenas uma casa por vez.");
        break;
    
    case "dama":
        console.log("(dama) -> Pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.");
        break;
    
    case "torre":
        console.log("(torre) -> Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.");
        break;
    
    case "peão":
        console.log("(cavalo) -> O movimento do cavalo forma um 'L'");
        break;

    default:
        console.log("Erro");
};

/*
EXERCÍCIO 7

Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

*/
const notaConvert = 76;


if (notaConvert >= 90) {
    console.log("Conceito A");
} else if (notaConvert >= 80) {
    console.log("Conceito B");
} else if (notaConvert >= 70) {
    console.log("Conceito C");
} else if (notaConvert >= 60) {
    console.log("Conceito D");
} else if (notaConvert >= 50) {
    console.log("Conceito E");
} else if (notaConvert < 50) {
    console.log("Conceito F");
} else if (notaConvert < 0 && notaConvert > 100) {
    console.log("A nota está errada!")
}