function alterarStatus(id){
    let elemento = document.getElementById('game-'+ id);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector('.dashboard__item__button');
    trocarStatus(imagem, botao);
}

function trocarStatus(img, bot){

    if (bot.textContent == 'Alugar') {
        bot.className = 'dashboard__item__button dashboard__item__button--return';
        img.className = 'dashboard__item__img dashboard__item__img--return';
        bot.innerHTML = 'Devolver';
    } else {
        bot.className = 'dashboard__item__button';
        img.className = 'dashboard__item__img';
        bot.innerHTML = 'Alugar';
    }
}
