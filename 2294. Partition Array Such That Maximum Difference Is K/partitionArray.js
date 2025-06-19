/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var partitionArray = function (nums, k) {
    nums.sort((a, b) => a - b)
    let min = nums[0]
    let cnt = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - min <= k) {
            continue;
        }
        cnt++;
        min = nums[i]
    }

    return cnt
};