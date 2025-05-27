/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let len = cost.length
    let dp = new Array(len + 1).fill(0);
    dp[0] = 0
    dp[1] = cost[0]



    for (let i = 2; i <= len; i++) {
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i - 1]
    }

    // console.log("dp " , dp)

    return Math.min(dp[len], dp[len - 1])
};