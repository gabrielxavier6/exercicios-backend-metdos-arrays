function dividirEmGrupos(array, tamanhoDoGrupo) {
    let grupos = [];

    for (let i = 0; i < array.length; i += tamanhoDoGrupo) {
        let grupo = array.slice(i, i + tamanhoDoGrupo);
        grupos.push(grupo);
    }

    for (let i = 0; i < grupos.length; i++) {
        console.log(`Grupo ${i + 1}: ${grupos[i].join(', ')}.`);
    }
}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

dividirEmGrupos(nomes, tamanhoDoGrupo);

