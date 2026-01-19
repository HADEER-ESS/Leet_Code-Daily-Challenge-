/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
    let str = a
    let cnt = 1;

    while (str.length < b.length) {
        str += a
        cnt++
    }

    if (str.includes(b)) return cnt;
    str += a
    return str.includes(b) ? cnt + 1 : -1
};