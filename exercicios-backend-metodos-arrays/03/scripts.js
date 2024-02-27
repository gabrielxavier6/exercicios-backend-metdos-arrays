function capturarCarros(array, posicao) {

    const carrosCapturados = array.slice(posicao, posicao + 3);

    console.log(carrosCapturados);
}

const carros = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

capturarCarros(carros, posicao);
