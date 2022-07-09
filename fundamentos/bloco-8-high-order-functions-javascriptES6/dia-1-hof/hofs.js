/* Estruturas básicas das HOF's */
const sum = (num1, num2) => num1 + num2; // soma

const sub = (num3, num4) => num3 - num4; // subtração

const multi = (num5, num6) => num5 * num6; // multiplicação

const div = (num7, num8) => num7 / num8; // divisão


console.log(sum(10, 5));
console.log(sub(30, 20));

/* Outra forma de realizar soma e subtração */

const calculator = (func) => func(10, 5);
console.log(calculator(sum));
console.log(calculator(sub));
console.log(calculator(multi));
console.log(calculator(div));