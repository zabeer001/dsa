function numSquares(n) {
  const dp = new Array(n + 1).fill(Infinity);
  console.log(dp);
  
  dp[0] = 0; // base case: 0 can be made with 0 perfect squares

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      const square = j * j;
      dp[i] = Math.min(dp[i], dp[i - square] + 1);
    }
  }

  return dp[n];
}

// ✅ Test Cases
console.log(numSquares(12)); // Output: 3 (4 + 4 + 4)
console.log(numSquares(13)); // Output: 2 (9 + 4)
console.log(numSquares(1));  // Output: 1 (1)
console.log(numSquares(100)); // Output: 1 (100)