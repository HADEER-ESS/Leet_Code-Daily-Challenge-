/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
    let ans = 0;
    for (let row of grid) {
        row.sort((a, b) => a - b)
    }

    while (grid[0].length > 0) {
        let max = 0

        for (let row of grid) {
            max = Math.max(max, row.pop())
        }
        ans += max
    }

    return ans
};