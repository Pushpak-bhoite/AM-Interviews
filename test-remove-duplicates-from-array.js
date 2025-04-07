let arr = [1, 3, 33, 4, 3, 3, 3, 2, 4, 5, 2, 2]
let unique = []
for (let i = 0; i < arr.length; i++) {
    let isUnique = true;
    for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
            isUnique = false
            break;
        }
    }
    if (isUnique) {
        unique[unique.length] = arr[i]
    }
}
console.log('unique-->', unique)