const pivotIndex = (nums) => {
    let comparingArr = nums
    comparingArr.push(0)
    comparingArr.unshift(0)

    for (let i = 1; i < (comparingArr.length - 1); i++) {

        let leftSide = comparingArr.slice(0, i)
        let rightSide = comparingArr.slice(i+1, comparingArr.length)
        const leftSideSum = leftSide.reduce((a, b) => a + b, 0);
        const rightSideSum = rightSide.reduce((a, b) => a + b, 0);
        if (leftSideSum === rightSideSum) {
            return i-1
        }
    }

    return -1;


}




let nums = [2,1,-1]
let result = pivotIndex(nums)

console.log(result);
