/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
    let freq = new Map();
    let hasMid = false;
    let cnt = 0

    //fill the map
    for (let word of words) {
        if (!freq.has(word)) {
            freq.set(word, 0)
        }
        freq.set(word, freq.get(word) + 1)
    }

    for (let word of words) {
        let rev = word[1] + word[0]
        //the word itself is palindrom
        if (word === rev) {
            // have a mutliple repeatation
            while (freq.get(word) >= 2) {
                cnt += 4
                freq.set(word, freq.get(word) - 2)
            }
            //is only one be in the middle
            if (freq.get(word) === 1 && !hasMid) {
                hasMid = true;
                cnt += 2
                freq.set(word, freq.get(word) - 1)
            }
        }

        //if it has its flipper
        else if (freq.get(word) > 0 && freq.get(rev) > 0) {
            cnt += 4
            freq.set(word, freq.get(word) - 1)
            freq.set(rev, freq.get(rev) - 1)
        }

    }

    return cnt;
};