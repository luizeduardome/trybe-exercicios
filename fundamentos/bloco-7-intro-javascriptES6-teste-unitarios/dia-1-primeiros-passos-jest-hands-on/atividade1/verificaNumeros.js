/* Criado a função para ser exportada para o arquivo
verificaNumeros.test.js.
 */

const numeros = (array) => {
    for (let index = 0; index < array.length; index += 1) {
        if (typeof array[index] !== 'number') {
            return false;
        }
    }
    return true;
};

module.exports = numeros;