const findNextGreaterElements = (arr) => {

    let result = [];
    for (let i = 0; i < arr.length; i++) {

        let element = -1;
        arr[i];
        for (j = i; j < arr.length; j++) {

            if (arr[j] > arr[i]) {
                element = arr[j];
                break;
            }
        }


        result.push(element);

    }
    return result;
}
// let arr = [1, 5, 2, 3, 1, 4, 7, 10, 17, 12, 6, 8, 9, 11, 20, 15, 14, 13];
let arr = [0, -1, 2,4,3,2];
let result = findNextGreaterElements(arr);
console.log(result); 

// 0 