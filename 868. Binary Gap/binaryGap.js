/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let ans = 0
    let binary = n.toString(2)
    let first = binary.indexOf('1')
    let idx = first + 1

    while (idx < binary.length) {
        if (parseInt(binary[idx]) === 0) {
            idx++
        }
        else {
            ans = Math.max(ans, idx - first)
            first = idx
            idx++
        }
    }
    return ans
};