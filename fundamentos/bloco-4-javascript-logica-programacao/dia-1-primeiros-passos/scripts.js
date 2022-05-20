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