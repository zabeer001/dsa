const solution = (arr, k) => {

    stack = []
    for (let i = k; i < 0; i++) {
        let x = arr.shift()
        stack.push(x)
    }

    // console.log(stack.pop());

    for (let i = 0; i < k; i++) {
        let x = stack.shift()
        arr.unshift(x);  //here I am using queue
    }

    return arr

}

let arr = [10, 20, 30, 40, 50]
let k = 3
let result = solution(arr, k)
console.log(result);



