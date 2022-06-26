const numeros = require('./verificaNumeros'); //Essa função importa o conteúdo contido no arquivo verificaNumeros.js

// é uma boa prática descrever qual é o describe - it - expect do teste.

/*Describe 1*/
describe('Requisito 1', () => {
    it('A função recebe [1, 2, 3, 5] e retorna true', () => {
        expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
    });
})

/*Describe 2*/
describe('Requisito 2', () => {
    it('A função recebe [1, 2, "3", 4, 5] e retorna false', () => {
        expect(false).toEqual(numeros([1, 2, '3', 4, 5]));
    });
});

/*Describe 3*/
describe('Requisito 3', () => {
    it('A função recebe [" "] e retorna false', () => {
        expect(false).toEqual(numeros([" "]));
    });
});

/*Exercício 1 - Ok*/