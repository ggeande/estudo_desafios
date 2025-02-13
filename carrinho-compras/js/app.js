function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let valor = pegarValorProduto(produto);

    
}

function pegarValorProduto(prod) {
    let valor = prod.split(' - R$')[1];
}    
