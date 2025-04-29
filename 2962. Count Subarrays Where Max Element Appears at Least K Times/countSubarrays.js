/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let max = Math.max(...nums)

    let l = 0;
    let res = 0;
    let cnt = 0

    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === max) {
            cnt++
        }

        while (cnt >= k) {
            res += (nums.length - r)
            if (nums[l] === max) cnt--
            l++
        }
    }

    return res;
};