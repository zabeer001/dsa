const  solution =  (nums, k ) => {

    nums.reverse();
    // console.log(arr);

    const firstPart = nums.slice(0, k);

    firstPart.reverse();
    // console.log(firstPart);

    const lastPart = nums.slice(k, nums.length);

    lastPart.reverse();


    let final = firstPart.concat(lastPart);

    return final



}



let nums =  [1,2,3,4,5,6,7]
let k = 3

let result = solution(nums,k)
console.log(result);




