/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
    let b_cnt = 0
    let ans = 0

    for (let chr of s) {
        if (chr === 'b') b_cnt++
        else if (b_cnt > 0) {
            b_cnt--
            ans++
        }
    }
    return ans
};