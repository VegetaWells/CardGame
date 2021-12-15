export function startNewGame() {
    const popup = document.getElementsByClassName('popup')[0];
    let str = document.getElementsByClassName('startGame')[0];
    const cardWrapper = document.querySelector('#cardWrapper');
    cardWrapper.style.display = 'none';
    popup.remove();
    str.classList.remove('none')
}



// Активация стартового popUp для начала новой игры