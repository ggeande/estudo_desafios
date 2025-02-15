

function comprar(){
    
    var quantidade = document.getElementById('qtd').value;
    var produto = document.getElementById('tipo-ingresso').value; 

    var qtdPista = document.getElementById('qtd-pista').textContent;
    var qtdSuperior = document.getElementById('qtd-superior').textContent;
    var qtdInferior = document.getElementById('qtd-inferior').textContent;

    
    
    switch(produto){
        case 'pista':
            if(quantidade <= qtdPista){
                qtdPista = qtdPista - quantidade;
                document.getElementById('qtd-pista').textContent = qtdPista;
                alert('Ingresso comprado com sucesso!');
            }else{
                alert('Quantidade indisponível!');
            }
            break;
        case 'superior':
            if(quantidade <= qtdSuperior){
                qtdSuperior = qtdSuperior - quantidade;
                document.getElementById('qtd-superior').textContent = qtdSuperior;
                alert('Ingresso comprado com sucesso!');
            }else{
                alert('Quantidade indisponível!');
            }
            break;
        case 'inferior':
            if(quantidade <= qtdInferior){
                qtdInferior = qtdInferior - quantidade;
                document.getElementById('qtd-inferior').textContent = qtdInferior;
                alert('Ingresso comprado com sucesso!');
            }else{
                alert('Quantidade indisponível!');
            }
            break;
        default:
            alert('Selecione um tipo de ingresso!');
    }
}