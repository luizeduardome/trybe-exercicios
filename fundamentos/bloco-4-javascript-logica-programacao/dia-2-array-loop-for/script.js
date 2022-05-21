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

