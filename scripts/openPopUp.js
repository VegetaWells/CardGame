import { count } from "./counter.js";
import { startNewGame } from "./startNewGame.js";

const cardWrapper = document.getElementById('cardWrapper');

export function openPopUp () {
    const popup = document.createElement('div');
    popup.classList.add('popup');

    const btnRes = document.createElement('button');
    btnRes.textContent = 'Restart';
    btnRes.addEventListener('click', startNewGame);
    btnRes.classList.add('choice');


    const winMessage = document.createElement('span');
    winMessage.classList.add('win');
    const counter = document.createElement('span');
    winMessage.textContent = `It took you ${count.counter} tries! Congratulations!!!`;


    popup.append(winMessage);
    popup.append(counter);
    popup.append(btnRes);
    cardWrapper.append(popup);
}


// Появление popUp после завершение игры, с предложением начать новую, а так же счётчик количества попыток с поздравлением






// export function openPopUp () {
//     const popup = document.createElement('div');
//     popup.classList.add('popup');

//     const btnEasier = document.createElement('button');
//     const btnFine = document.createElement('button');
//     const btnHarder = document.createElement('button');
//     btnHarder.textContent = 'Harder';
//     btnHarder.classList.add('start');
//     btnFine.textContent = 'I`m fine';
//     btnFine.classList.add('start');
//     btnEasier.textContent = 'Easier';
//     btnEasier.classList.add('start');



//     popup.addEventListener('click', function(event) {
//         if (event.target.textContent === 'Easier'){
//             startGame(8)
//             cardWrapper.style.display = "flex"
//             popup.remove();
//         } else if (event.target.textContent === 'Harder'){
//             startGame(32)
//             cardWrapper.style.display = "flex"
//             popup.remove();
//         } else if (event.target.textContent === 'I`m fine'){
//             startGame(16)
//             cardWrapper.style.display = "flex"
//             popup.remove();
//         }
//     })
// }