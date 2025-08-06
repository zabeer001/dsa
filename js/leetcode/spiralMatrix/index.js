const matrixOrder = (matrix) => {

    let top = 0;
    let left = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let nums = [];
    let size = (matrix[0].length) * (matrix.length);

      while (top <= bottom && left <= right) {

        for (let i = left; i <= right; i++) {
            nums.push(matrix[top][i]);
        }

        top++;

        for (let i = top; i <= bottom; i++) {
            nums.push(matrix[i][right]);
        }

        right--;

        for (let i = right; left <= i; i--) {
            nums.push(matrix[bottom][i])
        }
        bottom--;

        for (let i = bottom; top <= i; i--) {
            nums.push(matrix[i][left])
        }

        left++
        
    }


    return nums;

}

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
let result = matrixOrder(matrix)
// result = 8
console.log(result);
