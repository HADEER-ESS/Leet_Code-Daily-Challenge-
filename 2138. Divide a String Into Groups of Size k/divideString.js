/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
    let res = []
    let len = s.length
    if (len % k !== 0) {
        let remain = k - (len % k)
        for (let i = 0; i < remain; i++) {
            s += fill
        }
    }

    for (let i = 0; i < len; i += k) {
        res.push(s.substr(i, k))
    }
    return res;
};