/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let ans = []

    for (let i = 0; i < words.length; i++) {
        for (let chr of words[i]) {
            if (chr === x) {
                ans.push(i)
                break;
            }
        }
    }

    return ans
};