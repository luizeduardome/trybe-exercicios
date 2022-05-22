// VÍDEO 1

let singer = {
    name: 'Milton',
    lastName: 'Nascimento',
    nickName: 'Bituca',
    age: 77,
    bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
    bornInfo: {
        city: 'Rio de Janeiro',
        state: 'Rio de Janeiro'
    }
};

console.log("O cantor " + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.');

console.log("O cantor " + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.');

singer['fullName'] = singer.name + ' ' + singer.lastName;

console.table(singer);

console.log('O cantor ' + singer.fullName + ' nasceu no estado do ' + singer.bornInfo.state + ".");

console.table(singer);

// PARA FIXAR

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {golden: 2, silver: 3},
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
}

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir 
// no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log("A jogadora " + player.name + ' ' + player.lastName + ' tem ' + player.age + ' idade.')

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em 
// que a jogadora Marta foi considerada a melhor do mundo.

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: 
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

console.log("A jogadora " + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for, que nos garante facilidade ao lidar com objetos.

console.log("A jogadora possui " + player.medals.golden + ' de ouro e ' + player.medals.silver + ' de prata.');