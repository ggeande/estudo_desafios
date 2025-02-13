function alterarStatus(id){
    let elemento = document.getElementById('game-'+ id);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector('.dashboard__item__button');
    trocarStatus(imagem, botao);
}

function trocarStatus(img, bot){

    if (bot.textContent == 'Alugar') {
        img.classList.add('dashboard__item__img--rented');
        bot.classList.add('dashboard__item__button--return'); 
    } else {
        img.classList.remove('dashboard__item__img--rented');
        bot.classList.remove('dashboard__item__button--return');
        bot.innerHTML = 'Alugar';
    }
}
