/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0;
    const len = nums.length

    for (let right = 1; right < len; right++) {

        if (nums[left] === 0) {

            while (
                right < len - 1 &&
                nums[right] === 0) {
                right++;
            }
            nums[left] = nums[right]
            nums[right] = 0
        }
        left++
    }
};