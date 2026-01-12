/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let cnt = 0
    let pos = -1
    //if all capitals   => true  =>         cnt === len
    //if no capitals    => true  =>         cnt === 0
    //if first char is capital => true  =>  cnt === 1 and at position 0
    //else              => false

    for (let i = 0; i < word.length; i++) {
        if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
            cnt++
            pos = i
        }
    }

    if (cnt === word.length) return true
    if (cnt === 0) return true
    if (cnt === 1 && pos === 0) return true
    return false
};