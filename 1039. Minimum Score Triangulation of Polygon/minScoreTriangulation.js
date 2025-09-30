/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function (values) {
    const len = values.length
    let dp = Array(len).fill().map(i => Array(len).fill(0))

    //start with SINGLE triangle
    for (let sz = 3; sz <= len; sz++) {

        //to avoid J to be out of the range LEN
        for (let i = 0; i + sz - 1 < len; i++) {

            let j = i + sz - 1

            dp[i][j] = Infinity

            for (let k = i + 1; k < j; k++) {

                let min = dp[i][k] + dp[k][j] + (values[i] * values[k] * values[j])
                dp[i][j] = Math.min(dp[i][j], min)
            }
        }
    }

    return dp[0][len - 1]
};