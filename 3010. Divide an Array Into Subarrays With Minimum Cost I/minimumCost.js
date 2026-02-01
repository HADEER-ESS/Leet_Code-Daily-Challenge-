/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function (nums) {
    let sub = nums.slice(1).sort((a, b) => a - b)

    return nums[0] + sub[0] + sub[1];
};