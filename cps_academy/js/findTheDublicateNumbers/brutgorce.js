const findTheDublicateNumbers = (nums) => {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1 ; j < nums.length; j++) {

            if(nums[i] == nums[j]){
                return nums[i]
            }
        }
    }

}



let nums = [1, 3, 4, 2, 2]

let result = findTheDublicateNumbers(nums)
console.log(result);
