/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    let mp = new Map()
    let res = -1

    for (let num of arr) {
        if (!mp.has(num)) {
            mp.set(num, 0)
        }
        mp.set(num, mp.get(num) + 1)
    }

    for (let [key, val] of mp) {
        if (key === val) {
            res = Math.max(res, key)
        }
    }
    return res;
};