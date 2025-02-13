function sortear() {
    let qtd = parseInt(document.getElementById('quantidade').value);
    let min = parseInt(document.getElementById('de').value);
    let max = parseInt(document.getElementById('ate').value);
    let numeros = [];
    numeros = sortearNumeros(qtd, min, max);
    let elemento = document.getElementById('resultado');
    elemento.innerHTML = '<label class="texto__paragrafo">Números sorteados:' + numeros + '</label>';
    trocaClasse(document.getElementById('btn-reiniciar'), 'container__botao-desabilitado', 'container__botao');
    trocaClasse(document.getElementById('btn-sortear'), 'container__botao', 'container__botao-desabilitado');

}

function sortearNumeros(quantidadeNumero, numeroMinimo, numeroMaximo) {
    let numerosSorteados = [];
    for (let i = 0; i < quantidadeNumero; i++) {
        let num = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
        numerosSorteados.push(num);
    }
    return numerosSorteados;
}

function reiniciar() {
    limpar('resultado', '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>');
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    trocaClasse(document.getElementById('btn-sortear'), 'container__botao-desabilitado', 'container__botao');
    trocaClasse(document.getElementById('btn-reiniciar'), 'container__botao', 'container__botao-desabilitado');

}
function limpar(idTag, texto) {
    let elemento = document.getElementById(idTag);
    elemento.innerHTML = texto;
}


function trocaClasse(elemento, antiga, nova) {
    elemento.classList.remove(antiga);
    elemento.classList.add(nova);
}
