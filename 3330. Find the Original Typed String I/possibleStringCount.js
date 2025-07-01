/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
    let chr = word[0]
    let res = 1

    for (let i = 1; i < word.length; i++) {
        if (word[i] === chr) {
            res++
        }
        else {
            chr = word[i]
        }
    }

    return res;
};