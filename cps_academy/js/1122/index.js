const solution = (arr1, arr2) => {

    let stack = []
    //remove the duplicate first
    let uniqueArr = [...new Set(arr2)];


    //loop through the uniqarr which is converted from arr2
    for (let num of uniqueArr) {
        // console.log(num);
        if (arr1.includes(num)) {
            let removed = arr1.filter((e) => {
                return e === num; // store 2's
            });

            arr1 = arr1.filter((e) => {
                return e !== num; // remove 2's
            });

            // console.log(removed);

            for (let n of removed) {
                stack.push(n)
            }

        }

    }

    // return {stack,arr1}

    arr1.sort((a,b)=>a-b)


    // Method 1: concat()
    let combined = stack.concat(arr1);
    return combined


}


arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 34 ,19];
arr2 = [2, 1, 4, 3, 9, 6]

let result = solution(arr1, arr2)
console.log(result);
