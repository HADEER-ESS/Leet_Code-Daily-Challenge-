/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function (nums) {
    let ans = 0;
    let len = nums.length

    for (let i = 1; i < len + 2; i++) {
        let oper = Math.abs(nums[i % len] - nums[(i - 1) % len])
        ans = Math.max(ans, oper)
    }

    return ans;
};