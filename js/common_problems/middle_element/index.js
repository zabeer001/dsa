const findMiddleElement = (arr) => {
    let middleElementIndex;
    if (arr.length % 2 == 0) {

        middleElementIndex = (arr.length - 2) / 2

    } else {
        middleElementIndex = (arr.length - 1) / 2
    }
    return arr[middleElementIndex]
}



// conventional 
// const findMiddleElement = (arr) => {
//     let middleElementIndex;
//     if (arr.length % 2 == 0) {

//         middleElementIndex = (arr.length - 2) / 2

//     } else {
//         middleElementIndex = (arr.length - 1) / 2
//     }
//     return arr[middleElementIndex]
// }

let arr = [2, 7, 8, 9, 1, 0];
let result = findMiddleElement(arr);
console.log(result);

// ||| |      ||||


