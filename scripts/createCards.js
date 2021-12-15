export function createCards(number,anchor){
    for(let i = 0;i<number;i++){
        anchor.insertAdjacentHTML("afterbegin",`
        <div class="card" data-number = "0">
            <div class="front">
                <img src='' alt="frontCard">
            </div>
            <div class="back">
                <img src="images/backCard/back.jpg" alt="backCard">
            </div>
        </div>
    `)
    }
}


// Создание карт с их незаполненными атрибутами