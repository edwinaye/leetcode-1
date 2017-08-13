/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
  pairs.sort((a, b) => a[0] - b[0]);

  let dp = [];
  for (let i = 0; i < pairs.length; ++i) dp[i] = 1;

  for (let i = 1; i < pairs.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (pairs[i][0] > pairs[j][1] && dp[i] < dp[j] + 1) dp[i] = dp[j] + 1;
    }
  }

  return Math.max(...dp);
};

console.log(findLongestChain([[1,2], [2,3], [3,4]]));
console.log(findLongestChain([[1,2]]));
console.log(findLongestChain([]));