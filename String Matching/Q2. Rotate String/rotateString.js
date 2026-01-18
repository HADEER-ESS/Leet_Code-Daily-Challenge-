/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    const len = s.length
    let idx = 0

    while (idx < len) {
        let rev = s.substring(idx) + s.substring(0, idx)
        if (rev === goal) {
            return true
        }
        idx++
    }
    return false
};