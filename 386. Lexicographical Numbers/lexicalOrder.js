/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    let res = []

    function solve(num) {
        if (num > n) return
        res.push(num)

        for (let i = 0; i <= 9; i++) {
            let update = num * 10 + i
            if (update > n) break;
            solve(update)
        }
    }

    for (let i = 1; i <= 9; i++) {
        solve(i)
    }

    return res;
};