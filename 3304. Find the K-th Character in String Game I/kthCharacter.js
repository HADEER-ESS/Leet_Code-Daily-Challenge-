/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let word = "a"

    while (word.length < k) {
        let curr = ''
        for (let chr of word) {
            curr += String.fromCharCode((chr.charCodeAt(0) + 1) % 122)
        }
        word += curr
    }
    return word[k - 1]
};