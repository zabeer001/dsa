

const findTheDublicateNumbers = (nums) => {

    let obj = {};

    for (let num of nums){
        // here num
        if(!obj[num]){
            obj[num] = true
            console.log(obj);
            
        }else{
            return num
        }
    }

    return "no numbers found"
    
}



let nums = [1, 3, 4, 2, 2]

let result = findTheDublicateNumbers(nums)
console.log(result);
