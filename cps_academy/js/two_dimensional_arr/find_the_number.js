function findTheNumber(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        let row = '';
        for (let j = 0; j < arr[i].length; j++) {
            row += arr[i][j] + ' ';

            if (number == arr[i][j]) {
                // console.log(true);
                // console.log('row ' + i);
                // console.log('col ' + j);
               return {
                    found: true,
                    row: i,
                    col: j,
                };
            }
        }
        // console.log(row.trim());
    }
}

let number = 9;

arr = [
    [2, 3, 5],
    [1, 6, 9],
    [8, 98, 13]
];

let result = findTheNumber(arr, number);

console.log(result.found);


