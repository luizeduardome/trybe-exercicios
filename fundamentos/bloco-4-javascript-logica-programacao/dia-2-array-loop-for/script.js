let pizzas = ['Frango', 'Calabreza', 'Palmito', 'Atum'];


// pizzas.push('Chocolate');

// console.log(pizzas); // imprime o meu array
// console.log(pizzas.length); // imprime o tamanho do meu array
// console.log(pizzas.sort()); // imprime o meu array em ordem alfabética
// console.log(pizzas[3]);// imprime o meu array, apenas o índice que necessito


// console.log(pizzas[1]);
// console.log(pizzas[2]);

// Ao inves de ficar imprimindo índice por índice, utilizaremos o comando 'for'

for (let index = 0; index < pizzas.length; index += 1) {
    console.log(pizzas.sort()[index]);
}


// Prática 1
let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

console.log(taskList.length);

// Prática 2
let taskList2 = ['Tomar chá', 'Hora almoço', 'Brincar com o gato'];

let searchForFirstTask = taskList2[0];
console.log(searchForFirstTask);


// Prática 3
let taskList3 = ['Tomar banho', 'Digitar memorando', 'Enviar e-mail'];
taskList3.push('Fazer exercícios da trybe'); // Adiciona mais uma tarefa
console.log(taskList3);

// Prática 4
let taskList4 = ['Tomar banho', 'Digitar memorando', 'Enviar e-mail'];
taskList4.unshift("Fazer exercícios de Stanford."); // Adiciona no início da lista
taskList4.pop(); // remove a última tarefa
console.log(taskList4);


// Prática 5
let taskList5 = ['Tomar banho', 'Digitar memorando', 'Enviar e-mail'];
let indexOfTask = taskList5.indexOf('Digitar memorando') // Procura o índice de um ítem no Array
console.log(indexOfTask);

// EXERCÍCIO 1
// Obtenha o valor "Serviços" do array menu:
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf("Serviços");

console.log(menuServices);

// EXERCÍCIO 2
// Procure o índice do valor "Portfólio" do array menu:
let menu1 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu1.indexOf("Portfólio");

console.log(indexOfPortfolio);

// EXERCÍCIO 3
// Adicione o valor "Contato" no final do array menu:
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links']
menu2.push("Contato");
console.log(menu2);

// VÍDEO 1 - 4.2
var numero = 9;

for (contador = 1; contador < 9; contador += 1) {
    console.log(numero * contador);
}


var listaDeNomes = ['Joana', 'Maria', 'Lucas'];

for (var indice = 0; indice < listaDeNomes.length; indice += 1) {
    var mensagem = 'Boas vindas, ' + listaDeNomes[indice] + '!';
    console.log(mensagem);
}

// Prática 1
let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// Com o loop for
for (let index = 0; index < cars.length; index += 1) {
    let novaMensagem = 'Os carros disponíveis são: ' + cars[index] + '.';
    console.log(novaMensagem);
}

// EXERCÍCIO 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Tomate'];

for (lista = 0; lista < groceryList.length; lista += 1) {
    console.log(groceryList[lista]);
}

// LOOP FOR/OF

// PRÁTICA 2
let numeros = [1, 2, 3, 4, 5, 6];
for (let numero of numeros) {
    console.log(numero);
}

// PRÁTICA 3
let word = 'hello';
for (let letter of word) {
    console.log(letter);
}

// PRÁTICA 4
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
    sum += 1;
    console.log(sum);
}

// EXERCÍCIO 1
// Utilize o for/of para imprimir os elementos da lista names com o console.log():
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let ordem of names) {
    console.log(ordem);
}