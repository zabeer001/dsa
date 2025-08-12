
const solution = (nums)=>{ 

    let num
    let arr = []

    for(let i = 0 ; i < nums.length ;i++ ){
        let sum = 0
        num = nums[i]

        for(let j = 0; j <nums.length ;j++ ){
            if(num > nums[j]){
                sum = sum + 1
            }

        }
        arr.push(sum)
    }

    return arr 

}

let nums = [7,7,7,7]

let result = solution(nums)
console.log(result);
