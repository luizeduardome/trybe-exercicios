// pedidos de pizza
let pizzas = {
    sabor: "Palmito",
    preco: 39.9,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(key);
}

// Mostrando 3 vezes o objeto completo
let pizzas = {
    sabor: "Palmito",
    preco: 39.9,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas);
}

// Utilizando dot notation
let pizzas = {
    sabor: "Palmito",
    preco: 39.9,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas.preco);
}

// Passando o nome da propriedade
let pizzas = {
    sabor: "Palmito",
    preco: 39.9,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas['sabor']);
}

// Mostrar as propriedades do objeto
let pizzas = {
    sabor: "Palmito",
    preco: 39.9,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas[key]);
}

// Trabalhar com for in dentro de arrays
let pizzas = {
    sabor: "Palmito",
    preco: 39.9,
    bordaCatupiry: true
};

for (let key in pizzas) {
    console.log(pizzas['bordaCatupiry']);
}


let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];
for (let key in pizzasDoces) {
    console.log(key); // As posições do array
}

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];
for (let key in pizzasDoces) {
    console.log(pizzasDoces); // Mostra 3 vezes os valores
}

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];
for (let key in pizzasDoces) {
    console.log(pizzasDoces[key]); // Mostra cada item do indice
}

let pizzasDoces = ['Chocolate', 'Banana', 'Morango'];
for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]);
}




