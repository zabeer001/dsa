const sortArr = (nums) => {
    nums.sort((a, b) => a - b);
    return nums
}

const findTheDublicateNumbers = (nums) => {

    nums = sortArr(nums)

    return nums;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            return nums[i]
        }
    }
    
}



let nums = [1, 3, 4, 2, 2]

let result = findTheDublicateNumbers(nums)
console.log(result);
