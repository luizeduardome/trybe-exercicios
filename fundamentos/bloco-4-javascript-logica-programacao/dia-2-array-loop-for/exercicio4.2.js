// EXERCÍCIO 4.2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

for(let x = 0; x < numbers.length; x += 1) {
    console.log(numbers[x]);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}
console.log(resultado);

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let result = 0
for (let index = 0; index < numbers.length; index += 1) {
    result += numbers[index] / numbers.length;
}
console.log(result);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem:
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

 if (result > 20) {
     console.log("maior que 20");
 } else if (result <= 20) {
     console.log("Valor menor ou igual a 20");
 }

 // 5 - 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maior = 0;
for (let indice = 0; indice < numbers.length; indice += 1) {
    if (numbers[indice] > maior) {
        maior = numbers[indice]
    }
}
console.log(maior)

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impar = 0;
for (let raio = 0; raio < numbers.length; raio += 1) {
    if (numbers[raio] % 2 != 0) {
        impar = impar += 1;
    }
}
console.log(impar);

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let menor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < menor) {
        menor = numbers[i];
    }
}
console.log(menor);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numero = [];

for (let x = 0; x <= 25; x += 1) {
    numero.push(x);
}

console.log(numero);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
 for (let z = 0; z < numero.length; z += 1) {
     console.log(numero[z] / 2);
 }