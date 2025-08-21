const fibonachi = (n) => {
    if (n == 0) return 0; // base case for negative numbers
    if (n == 1) return 1; // base cases for 1 and 2

    return fibonachi(n - 1) + fibonachi(n - 2);
    

}


let result = fibonachi(7);
console.log(result); // true for 16, which is 2^4

// f(7) -> 0 1 1 2 3 5 8