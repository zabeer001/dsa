const findTheMissingNumber = (nums) => {

    let range = nums.length
    for (let i = 0; i <= range; i++) {

        if (!nums.includes(i)) {
            return i
        }
    }

}



let nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]

let result = findTheMissingNumber(nums)
console.log(result);

var missingNumber = function (nums) {
    let range = nums.length
    for (let i = 0; i <= range; i++) {

        if (!nums.includes(i)) {
            return i
        }
    }
    return 'no missing number'

};
