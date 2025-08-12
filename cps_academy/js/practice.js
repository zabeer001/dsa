const solution = (nums, k) => {

  let obj = {}
    // let arr = []
    // console.log(nums.length - 1);




    for (let i = 1; i < nums.length; i++) {
        let number = nums[i]
        let position = i + k
        if (position >= nums.length) {
            obj[(i + k) % nums.length]  = number

        } else {
            obj[position] = number
        }

    }

    // for (let property of Object.keys(obj)) {
    //     console.log(property, obj[property]);
    // }
    console.log(obj);

    obj["zabeer"] = 100
    

    for(let property of Object.keys(obj)){
        console.log(property,obj[property]);

        nums[Number(property)] = Number(obj[property])
        
    }
   return nums
}


let nums =  [1,2,3,4,5,6,7]
let k = 3
let result = solution(nums, k)
console.log(result);
