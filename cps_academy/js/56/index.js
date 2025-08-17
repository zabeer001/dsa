function checkIfIn(arr1, number) {

    if (number >= arr1[0] && number <= arr1[1]) {
        return true
    }
    return false
}


var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let len = intervals.length

    for (let i = 0; i < len - 1; i++) {

        let arr1 = intervals[i]
        let arr2 = intervals[i + 1]
        let num = arr2[0]

        if (checkIfIn(arr1, num)) {
            arr1[1] = Math.max(arr1[1], arr2[1]);
            intervals.splice(i + 1, 1); 
            i--; 
            len--;
        }

    }

    return intervals
};

let intervals = [[1, 4], [0, 4]]

let result = merge(intervals)
console.log(result);
