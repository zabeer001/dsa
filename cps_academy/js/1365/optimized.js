const solution = (nums) => {

    let sum = 0
    let obj = {}
    let smallerNumbersThanCurrent = []

    obj[1] = 0

    // Make a copy using slice() or spread operator
    let sortedArray = [...nums].sort((a, b) => a - b);

    for (let i = 1; i < sortedArray.length; i++) {

        if (sortedArray[i - 1] < sortedArray[i]) {
            obj[sortedArray[i]] = i
        }
    }

    for (let num of nums) {
        if (!obj[Number(num)]) {
            smallerNumbersThanCurrent.push(0)
        } else {
            smallerNumbersThanCurrent.push(obj[Number(num)])
        }


    }
    // return { sortedArray, obj, smallerNumbersThanCurrent }
    return smallerNumbersThanCurrent

}



let nums = [30, 4, 4, 5, 51, 1, 2, 2, 3]
// console.log(nums);


let result = solution(nums)
console.log(result);
// console.log(nums);
