/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function (nums, k) {
    nums.sort((a, b) => a - b)
    let start = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[start] * k) {
            start++
        }
    }
    return start;


};