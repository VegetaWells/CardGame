export function addCard (arr1,arr2) {
    for(let i = 0;i<arr1.length;i++){
        arr1[i].src = `images/${arr2[i]}.jpg`
    }
}


// добавление каждой карте цикла - картинки