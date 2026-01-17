/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let mid = Math.floor(s.length / 2)
    const len = s.length

    for (let i = 1; i <= mid; i++) {
        let sub = s.substr(0, i)
        let rep = Math.floor(len / sub.length)

        if (sub.repeat(rep) === s) {
            return true
        }
    }
    return false
};