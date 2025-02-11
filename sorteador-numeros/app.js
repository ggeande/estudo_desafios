


function sortear() {
    let qtd = document.getElementById('quantidade').value;
    let min = document.getElementById('de').value;
    let max = document.getElementById('ate').value;
    let numeros = [];
    numeros = sortearNumeros(qtd, min, max);
    let elemento = document.getElementById('resultado');
    elemento.innerHTML = numeros

}

function sortearNumeros(quantidadeNumero, numeroMinimo, numeroMaximo) {
    console.log('qtd(' + quantidadeNumero + ')min(' + numeroMinimo + ')max(' + numeroMaximo+')');
    let numerosSorteados = [];
    for (let i = 0; i < quantidadeNumero; i++) {
        let num = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
        console.log('qtd(' + quantidadeNumero + ')min(' + numeroMinimo + ')max(' + numeroMaximo+') numero sorteado ' + num);
        numerosSorteados.push(num);
    }
    return numerosSorteados;
}