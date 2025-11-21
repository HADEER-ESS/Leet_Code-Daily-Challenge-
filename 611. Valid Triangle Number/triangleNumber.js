/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    const len = nums.length
    nums.sort((a, b) => a - b)
    let ans = 0

    for (let i = len - 1; i >= 2; i--) {

        let left = 0
        let right = i - 1

        while (left < right) {

            if (nums[right] + nums[left] > nums[i]) {
                ans += right - left
                right--
            }
            else {
                left++
            }
        }
    }

    return ans
};