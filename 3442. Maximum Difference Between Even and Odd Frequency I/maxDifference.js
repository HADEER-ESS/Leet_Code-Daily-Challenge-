/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
    let arr = new Array(26).fill(0)

    for (let chr of s) {
        let code = chr.charCodeAt(0) - 97
        arr[code]++
    }
    //odd - even
    let maxOdd = 0
    let minEven = Infinity

    for (let num of arr) {
        if (num % 2 === 0 && num > 0) {
            minEven = Math.min(minEven, num)
        }
        else {
            maxOdd = Math.max(maxOdd, num)
        }
    }

    return maxOdd - minEven
};