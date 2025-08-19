const solution = (nums, k ) =>{

nums.sort((a, b) => b - a);

return nums[k-1]

}


let nums = [3,2,3,1,2,4,5,5,6]
let k = 4

let result = solution(nums,k)
console.log(result);
