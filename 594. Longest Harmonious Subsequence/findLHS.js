/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let mp = new Map()
    let res = 0

    for (let num of nums) {
        if (!mp.has(num)) {
            mp.set(num, 0)
        }
        mp.set(num, mp.get(num) + 1)
    }

    for (let [num, cnt] of mp) {
        if (mp.has(num + 1)) {
            let sum = cnt + mp.get(num + 1)
            res = Math.max(res, sum)
        }
    }

    return res
};