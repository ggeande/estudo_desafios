function alterarStatus(id){
    let elemento = document.querySelector('#game-'+ id +' .dashboard__item__button');
    trocaClass(elemento);
}

function trocaClass(elemento){
    
    if (elemento.classList.contains('dashboard__item__button--return')) {
        elemento.className = 'dashboard__item__button';
        elemento.innerHTML = 'Alugar';
        
    }else{
        elemento.className = 'dashboard__item__button dashboard__item__button--return';
        elemento.innerHTML = 'Devolver';
    }

}
