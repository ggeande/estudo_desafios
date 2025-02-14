limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    let produtoNovo = {
        quantidade: quantidade,
        valor: produto.split(' - R$')[1],
        nome: produto.split(' - R$')[0]
    };
    adicionarProdutoCarrinho(produtoNovo);
    let itensCarrinho = buscarCarrinho();
    let valorTotal = total(itensCarrinho);
    atualizarValorTotal(valorTotal);
}

function atualizarValorTotal(valor){
    let valorTotalElement = document.getElementById('valor-total');
    valorTotalElement.textContent = `R$${valor.toFixed(2)}`;
}

function total(itens){
    let vlrTotal = 0;
    itens.forEach((item) => {
        let quantidade = parseInt(item.quantidade);
        let valor = parseFloat(item.valor.replace('R$', '').replace(',', '.'));
        vlrTotal += quantidade * valor;
        
    });

    return vlrTotal;
}


function buscarCarrinho(){
    let elementoCarrinho = document.getElementById('lista-produtos');
    let secoesCarrinho = elementoCarrinho.querySelectorAll('section');
    let listaCarrinho = [];
    secoesCarrinho.forEach((secao) => {
        let spans = secao.querySelectorAll('.texto-azul');
        let quantidadeTexto = spans[0] ? spans[0].textContent : 'N/A';
        let valorTexto = spans[1] ? spans[1].textContent : 'N/A';
        let textoProduto = spans[0].nextSibling.textContent.trim();

        let produtoObj = {
            quantidade: quantidadeTexto,
            valor: valorTexto,
            nome: textoProduto
        };
        listaCarrinho.push(produtoObj);

    });
    return listaCarrinho;

}

function adicionarProdutoCarrinho(produto){
    let elementoCarrinho = document.getElementById('lista-produtos');
    let secao = document.createElement('section');
    secao.classList.add('carrinho__produtos__produto');
    secao.innerHTML = '<span class="texto-azul">'+ produto.quantidade +'x </span> ' + produto.nome +' <span class="texto-azul"> R$'+ produto.valor +' </span>';
    elementoCarrinho.appendChild(secao);
}

function limpar(){
    let elementoCarrinho = document.getElementById('lista-produtos');
    elementoCarrinho.innerHTML = ''; // Remove todos os itens do carrinho
    atualizarValorTotal(0);
}