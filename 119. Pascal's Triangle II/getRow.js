/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let dp = new Array(rowIndex + 1).fill().map(() => [])

    dp[0] = [1]
    dp[1] = [1, 1]

    for (let i = 2; i <= rowIndex; i++) {
        let arr = [1]
        let last = dp[i - 1]
        for (let j = 0; j < last.length - 1; j++) {
            arr.push(last[j] + last[j + 1])
        }
        arr.push(1)
        dp[i] = arr
    }

    return dp[rowIndex]
};