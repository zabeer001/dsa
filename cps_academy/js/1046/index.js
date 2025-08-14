function insertIntoSortedArray(sortedArray, number) {
    let left = 0;
    let right = sortedArray.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (sortedArray[mid] < number) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    sortedArray.splice(left, 0, number);
    return sortedArray;
}

const findLastStone = (stones) => {

    let sortedArr = [...stones].sort((a, b) => a - b);


    while (sortedArr.length > 1) {
        // console.log(sortedArr);

        let bigstone = sortedArr.pop()
        let smallstone = sortedArr.pop()
        // console.log(sortedArr);


        let remainingStone = bigstone - smallstone

        sortedArr = insertIntoSortedArray(sortedArr, remainingStone)
        // console.log(sortedArr);

        // console.log(sortedArr.length);

        // console.log(sortedArr);
    }

    return sortedArr ? sortedArr[0] : 0;

}



let stones = [2, 7, 4, 1, 8, 1, 1]

let result = findLastStone(stones)
console.log(result);

