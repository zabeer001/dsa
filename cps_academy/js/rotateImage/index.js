const rotatemMatrix = (matrix) => {

    let newMatrix = []
    // console.log(matrix[0].length);
    // console.log(matrix.length);
    let n = matrix[0].length

    for (let i = 0; i < matrix[0].length; i++) {
        let arr = []      // loop through columns
        for (let j = matrix.length - 1; j >= 0; j--) { // loop backwards through rows

            arr.push(matrix[j][i])

            if (arr.length == n) {
                // console.log(arr);
                newMatrix.push(arr)
            }

        }
    }

    return newMatrix

}



let matrix =[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
let result = rotatemMatrix(matrix)
console.log(result);
