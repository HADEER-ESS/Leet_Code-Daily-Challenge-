/**
 * @param {string} s
 * @return {string}
 */

var clearStars = function (s) {
    let len = s.length
    let idxs = new Array(26).fill().map(() => [])
    let arr = s.split("")
    //a => 97

    for (let i = 0; i < len; i++) {
        let code = arr[i].charCodeAt(0) - 97
        if (arr[i] !== '*') {
            idxs[code].push(i)
        }
        else {
            for (let chr = 0; chr < 26; chr++) {
                if (idxs[chr].length > 0) {
                    let poped = idxs[chr].pop()
                    arr[poped] = ''
                    break;
                }
            }
            arr[i] = ''
        }
    }
    let str = arr.join('')

    return str

};