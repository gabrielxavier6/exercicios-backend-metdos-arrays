// Função para agendar um paciente adicionando-o ao final da fila
function agendarPaciente(fila, novoPaciente) {
    fila.push(novoPaciente);
    console.log(fila.join(', '));
}

// Função para atender o próximo paciente da fila
function atenderPaciente(fila) {
    if (fila.length > 0) {
        const pacienteAtendido = fila.shift();
        console.log(`Paciente ${pacienteAtendido} atendido.`);
        console.log(fila.join(', '));
    } else {
        console.log('Não há pacientes na fila para atendimento.');
    }
}

// Função para cancelar o atendimento de um paciente
function cancelarAtendimento(fila, pacienteCancelado) {
    const index = fila.indexOf(pacienteCancelado);
    if (index !== -1) {
        fila.splice(index, 1);
        console.log(`Atendimento de ${pacienteCancelado} cancelado.`);
        console.log(fila.join(', '));
    } else {
        console.log(`${pacienteCancelado} não encontrado na fila.`);
    }
}

// Teste com o array de pacientes
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

console.log("Fila inicial:", pacientes.join(', '));
agendarPaciente(pacientes, 'Carlos');
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, 'Ana');
