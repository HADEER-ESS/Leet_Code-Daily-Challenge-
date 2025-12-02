/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let cnt = 0;

    for (let num of nums) {
        if (num === 0) {
            max = Math.max(cnt, max)
            cnt = num
        }
        cnt += num
    }

    return Math.max(max, cnt)
};