/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length
    let min = prices[0]
    let dp = new Array(len).fill(0)

    for (let i = 1; i < len; i++) {
        min = Math.min(min, prices[i])
        //which is GREATER
        // the previous PROFIT
        //or if i SELL today will get the MAX PROFIT ???
        dp[i] = Math.max(dp[i - 1], prices[i] - min)
    }

    return dp[len - 1]
};

///SOLUTION 2


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let len = prices.length
    let min = prices[0]
    let maxProfit = 0

    for (let i = 1; i < len; i++) {
        min = Math.min(prices[i], min) //buy
        let curr = prices[i] - min  //sell
        maxProfit = Math.max(curr, maxProfit)
    }

    return maxProfit
};