/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    if (k === 1) return 0
    nums.sort((a, b) => b - a)
    let ans = Infinity
    let j = k - 1 //the last item in section we looked in

    for (let i = 0; j < nums.length; i++, j++) {
        ans = Math.min(ans, nums[i] - nums[j])
    }
    return ans;
};