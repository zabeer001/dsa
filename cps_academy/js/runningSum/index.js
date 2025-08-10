 const solution = (nums)=>{
    // return nums

    let arr = []
    let sum = 0 
    for( let num of nums){
        sum += num
        arr.push(sum)

    }
    return arr

 }

let nums = [3,1,2,10,1]
let result =  solution(nums)
console.log(result);
