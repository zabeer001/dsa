arr = [
    [2,3,5],
    [1,6,9],
    [8,98,13]
];

for (let i = 0; i < arr.length; i++) {
    let row = '';
    for (let j = 0; j < arr[i].length; j++) {
        row += arr[i][j] + ' ';
    }
    console.log(row.trim());
}