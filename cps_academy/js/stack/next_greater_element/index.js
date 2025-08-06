const findNextGreaterElements = (arr) => {
    if (arr.length === 0) {
        return [];
    }

    let solution = [];
    let stack = [];

    // The last element has no next greater
    solution.push(-1);
    stack.push(arr[arr.length - 1]);

    for (let i = arr.length - 2; i >= 0; i--) {
        // Remove all elements smaller or equal to current
        for (let j = stack.length - 1; j >= 0; j--) {
            if (arr[i] >= stack[stack.length - 1]) {
                stack.pop();
            }
        }

        // If no greater element
        if (stack.length === 0) {
            stack.push(arr[i]);
            solution.push(-1);
        } else {
            // The top of stack is the next greater
            solution.push(stack[stack.length - 1]);
            stack.push(arr[i]);
        }
    }

    // Reverse solution because we filled it from right to left
    return solution.reverse();
};

// Test
let arr = [0, -1, 2, 5, 3, 4, 2];
let result = findNextGreaterElements(arr);
console.log(result);  // Expected Output: [2, 2, 5, -1, 4, -1, -1]
