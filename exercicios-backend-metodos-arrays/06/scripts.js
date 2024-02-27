function encontrarDonoDoPet(usuarios, petProcurado) {
    for (const usuario of usuarios) {
        for (const pet of usuario.pets) {
            if (pet === petProcurado) {
                console.log(`O dono(a) do(a) ${petProcurado} é o(a) ${usuario.nome}`);
                return; // Encerra a função após encontrar o dono do pet
            }
        }
    }
    console.log(`Que pena ${petProcurado}, não encontramos seu dono(a)`);
}

// Teste com o pet "Max"
encontrarDonoDoPet(usuarios, "Max");
// Teste com o pet "Pingo"
encontrarDonoDoPet(usuarios, "Pingo");
// Teste com o pet "Salsicha"
encontrarDonoDoPet(usuarios, "Salsicha");
// Teste com o pet "Rex" que não está na lista
encontrarDonoDoPet(usuarios, "Rex");
