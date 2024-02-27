const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
function palavraInversa() {
    let palavraNova = frutas.reverse().join(',')
    console.log(palavraNova)
};
palavraInversa();

function palavraModificada1() {
    frutas.pop()
    frutas.shift()
    frutas.push('Melao')
    console.log(frutas)

};
palavraModificada1();