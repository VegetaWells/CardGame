export function addDatasetCards (arrDiv,arrRandomNum) {
    for(let i = 0;i<arrDiv.length;i++){
        arrDiv[i].dataset.number = arrRandomNum[i];
    }
}


// Добавление дата-номера каждой карте