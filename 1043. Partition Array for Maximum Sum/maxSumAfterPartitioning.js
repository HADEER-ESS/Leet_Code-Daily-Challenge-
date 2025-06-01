/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (nums, k) {
    let len = nums.length

    let dp = new Array(len + 1).fill(0)

    for (let i = 1; i <= len; i++) {
        let max = 0;
        let maxSum = 0;

        for (let j = 1; j <= k && i - j >= 0; j++) {
            max = Math.max(max, nums[i - j])
            //add the current partition sum, which is max * j 
            maxSum = Math.max(maxSum, dp[i - j] + max * j)
        }
        dp[i] = maxSum;

    }
    return dp[len]

};