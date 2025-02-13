
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let valor = pegarValorProduto(produto);
    
    buscarCarrinho()

    
}

function pegarValorProduto(prod) {
    return prod.split(' - R$')[1];
    
}    

function buscarCarrinho(){
    let elementoCarrinho = document.getElementById('lista-produtos');
    let secoesCarrinho = elementoCarrinho.querySelectorAll('section');
    let quantidadeSecoes = secoesCarrinho.length;

    console.log('Quantidade de produtos no carrinho:', quantidadeSecoes);
    console.log('Seções do carrinho:', secoesCarrinho.values);
    
    secoesCarrinho.forEach((secao) => {
        console.log('Seção:', secao);
        
    });

}
