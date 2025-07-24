const sortArray = (arr) => {
    let stack = [];
    let stack2 = [];

    while (arr.length > 0) {
        let item = arr.pop();

        // Move elements greater than 'item' from stack to stack2
        while (stack.length > 0 && stack[stack.length - 1] > item) {
            stack2.push(stack.pop());
        }

        // Place the current item in the correct position
        stack.push(item);

        // Move back the elements from stack2 to stack
        while (stack2.length > 0) {
            stack.push(stack2.pop());
        }
    }

    return stack;
}

let arr = [2, 4, 5, 3, 1];
let result = sortArray(arr);
console.log(result);  // Output: [1, 2, 3, 4, 5]
