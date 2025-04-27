/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function (nums) {
    let ans = 0;

    for (let l = 0; l < nums.length - 2; l++) {
        if (nums[l] + nums[l + 2] === nums[l + 1] / 2) ans++
    }

    return ans;
};