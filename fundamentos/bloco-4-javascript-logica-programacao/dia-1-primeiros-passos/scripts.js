// VÍDEO 1 

// let age = 20;
// let name = 'Hulk';

// console.log(age);
// console.log(name);

// VÍDEO 2 
let movie = "Avengers"; //string literal
let score = 10; //numer literal
let isValid = true; //boolean
let name; //undefined
let color = null; //redefinição

//+, -, *, /, **

let salary = 3500;

console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);
console.log(3 ** 3);

salary++;

console.log(salary);

// VÍDEO 3

/* Agora é a hora da mão na massa no código! No exemplo abaixo, temos as informações de um paciente. 
Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail.
Esse operador retorna qual o tipo de uma variável, objeto, função ou expressão. Exemplo: 
console.log(typeof patientId) retornará number. */

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
    firstName: "Ana",
    lastName: "Santos",
};
const patientEmail = "ana@email.com";

console.log(typeof patientId, typeof isEnrolled, typeof patientInfo, typeof patientEmail);
// console.log(typeof isEnrolled);
// console.log(typeof patientId);
// console.log(typeof patientEmail);
console.log(typeof patientAge);
console.log(typeof patientId);


// VÍDEO 4

// if - se 
// else - senão

// if (condicao) {
//     // codigo
// }
// else if (outraCondicao) {
//     // outra condicao
// }
let trybe = 15;
if (trybe >= 14 && trybe < 14.4) {
    console.log("Esquenta");
}
else if (trybe >= 16.30 && trybe < 17.50) {
    console.log("Aula ao vivo");
}
else if (trybe >= 19.4 && trybe < 20) {
    console.log("Fechamento");
}
else {
    console.log("Fora do momento síncrono.");
}

// Operadores lógicos
const comida = 'pão na chapa';
const bebida = 'cafezinho';

if (bebida === 'cafezinho' && comida === 'pão na chapa') {
    console.log("Muito obrigado pela refeição :)");
} else {
    console.log("Acho que houve um engano com o meu pedido.");
}


// Precisamos manter em mente que só teremos true se as duas expressões em volta dele forem true também.

const conditionONe = true;
const conditionTwo = false;

console.log(conditionONe && conditionTwo);

// Mas... E o que acontece se existir um encadeamento de &&? 🤔

const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;
console.log(listaDeCompras);

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false


// 1 - Crie uma constante chamada "currentHour" que recebe um número entre 4 e 24 de sua escolha, 
// para representar as horas do dia.

const currentHour = 13;

// Crie uma variável chamada "message" que, inicialmente, é uma string vazia.
let message = " ";

// Implemente condicionais para que:

// Se o horário for maior ou igual a 22, insira "Não deveríamos comer nada, é hora de dormir" na variável "message".

// Se o horário for maior ou igual a 18 e menor que 22, insira "Rango da noite, vamos jantar :D" na variável "message".

// Se o horário for maior ou igual a 14 e menor que 18, insira "Vamos fazer um bolo pro café da tarde?" na variável "message".

// Se o horário estiver entre 11 e 14, insira "Hora do almoço!!!" na variável "message".

// Se o horário estiver entre 4 e 11, insira "Hmmm, cheiro de café recém passado" na variável "message".

if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour > 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour > 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado";
} else {
    message = 0;
}

console.log(message);

// VÍDEO 5

