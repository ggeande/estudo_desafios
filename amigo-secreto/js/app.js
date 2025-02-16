let amigos = [];


function adicionar() {

    let nome = document.getElementById('nome-amigo').value.trim();
    if (nome == '') {
        alert('Informe o nome do amigo');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Amigo já adicionado');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    if (lista.textContent == '') {
        lista.textContent = nome;
    } else {
        lista.textContent = lista.textContent + ', ' + nome;
    }
    document.getElementById('nome-amigo').value = '';
    amigos.push(nome);
}


function sortear() {

    if (amigos.length < 3) {
        alert('Adicione mais amigos para sortear');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }

}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function limpar() {
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    amigos = [];
}
