import { generatorNumberArr } from './scripts/generatorNumberArr.js';
import { openPopUp } from './scripts/openPopUp.js';
import { createCards } from './scripts/createCards.js';
import { addCard } from './scripts/addCard.js';
import { addDatasetCards } from './scripts/addDatasetCards.js';
import {checkWin} from './scripts/checkWin.js';
import { count } from './scripts/counter.js';

const divClass = document.getElementsByClassName('card');
const cardWrapper = document.getElementById('cardWrapper');
const choiceDifficulty = document.querySelector('.startGame');
let arrUnknownCards = [];
let hasTurnCard = false;
let lockCards = false;
let firstCard;
let secondCard;

export function startGame (number){
    count.clear();
    createCards(number,cardWrapper);
    const arrayDiv = [...divClass];
    let arrNumber = generatorNumberArr(divClass);
    const cardImg = document.querySelectorAll('[alt="frontCard"]')

    addCard(cardImg,arrNumber);
    addDatasetCards(arrayDiv,arrNumber)

    arrayDiv.forEach((item)=>item.addEventListener('click',turnCard))
}



function endGame (){
    const arrayDiv = [...divClass];
    arrayDiv.forEach((item)=>item.remove());
    openPopUp();
}


choiceDifficulty.addEventListener('click',function(event){
    if(event.target.textContent === 'Easy'){
        startGame(8)
        choiceDifficulty.classList.add('none')
        cardWrapper.style.display = "flex"
    }else if(event.target.textContent === 'Normal'){
        startGame(16)
        choiceDifficulty.classList.add('none')
        cardWrapper.style.display = "flex"
    }else if(event.target.textContent === 'Hard'){
        startGame(32)
        cardWrapper.style.display = "flex"
        choiceDifficulty.classList.add('none')
    }
})

function turnCard(){

    if (lockCards) return;
    this.classList.add('turn');
    if(!hasTurnCard  &&  secondCard){
        secondCard.classList.remove('turn'); 
        firstCard.classList.remove('turn');
        secondCard.addEventListener('click',turnCard);
        firstCard.addEventListener('click',turnCard);
        count.incr();
    }
    if (!hasTurnCard) {
        hasTurnCard = true;
        firstCard = this;
        firstCard.removeEventListener('click',turnCard)
        return
    }else{
        secondCard = this;
        hasTurnCard = false;
        secondCard.removeEventListener('click',turnCard)
    }
    checkForMatch()
  
}


function resetBoard() {
    [hasTurnCard, lockCards] = [false, false];
    [firstCard, secondCard] = [null, null];
}
function checkForMatch (){
    if(firstCard.dataset.number === secondCard.dataset.number){
        lockCards = true;
        let promise = new Promise((resolve)=>{
            setTimeout(()=>{
                firstCard.classList.add('hide')
                secondCard.classList.add('hide');
                arrUnknownCards.push(firstCard);
                arrUnknownCards.push(secondCard)
                count.incr();
                resetBoard();
            lockCards = false;
            resolve('OK');
            },1000)
        })
        promise.then(()=>{
            if(checkWin(divClass,arrUnknownCards)){console.log('End game'),endGame()};
        });
    }
    
}