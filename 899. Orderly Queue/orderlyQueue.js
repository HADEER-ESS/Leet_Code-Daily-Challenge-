/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
    // TWO options to consider
    // 1. k = 1, we can only rotate the string, so we need to find the lexicographically smallest rotation
    // 2. k > 1, we can sort the string, so we just return the sorted string
    if (k === 1) {
        let best = s;
        let str = s.split("")

        for (let i = 1; i < str.length; i++) {
            let rot = s.slice(i) + s.slice(0, i)
            if (rot < best) {
                best = rot
            }
        }
        return best
    }
    else {
        return s.split('').sort().join('')
    }
};