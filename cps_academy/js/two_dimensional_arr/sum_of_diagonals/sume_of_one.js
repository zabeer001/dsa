function getDiagonalSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
    }


    for (let k = arr.length - 1; k >= 0; k--) {
        if (k == ((arr.length - 1) - k)) {
            continue;
        }
        sum += arr[k][(arr.length - 1) - k];
    }

    return sum;
}

arr = [
    [2, 3, 5],
    [1, 6, 9],
    [8, 98, 13]
];

let sum = getDiagonalSum(arr);

console.log(sum);



// arr[2][0], arr[1][1], arr[0][2]


