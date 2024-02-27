function gerenciarAtendimento(fila, operacao, nomePaciente = null) {
    if (operacao === 'agendar') {
        if (nomePaciente) {
            fila.push(nomePaciente);
            console.log('Paciente agendado com sucesso.');
        } else {
            console.log('Nome do paciente não fornecido para agendamento.');
        }
    } else if (operacao === 'atender') {
        if (fila.length > 0) {
            const pacienteAtendido = fila.shift();
            console.log(`Paciente ${pacienteAtendido} atendido.`);
        } else {
            console.log('Não há pacientes na fila para atendimento.');
        }
    } else {
        console.log('Operação inválida.');
    }

    console.log(fila.join(', '));
}

const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

gerenciarAtendimento(pacientes, 'atender');
gerenciarAtendimento(pacientes, 'agendar', 'Carlos');
