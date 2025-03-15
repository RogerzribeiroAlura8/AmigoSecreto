let participantes = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo").value.trim();

    if (!nomeInput) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    if (participantes.includes(nomeInput)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    participantes.push(nomeInput);
    document.getElementById("listaAmigos").innerHTML += `<li>${nomeInput}</li>`;
    document.getElementById("amigo").value = ""; // Limpar campo
}

function sortearAmigo() {
    if (participantes.length === 0) {
        alert("Adicione pelo menos um participante para realizar o sorteio!");
        return;
    }

    const sorteado = participantes[Math.floor(Math.random() * participantes.length)];

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpar resultados antigos
    resultadoLista.innerHTML = `<li>O nome sorteado foi: ${sorteado}</li>`;
}
