/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function sortColors(nums) {
    let left = 0;
    let right = nums.length - 1;

    let idx = 0;


    while (idx <= right) {
        if (nums[idx] === 0) {
            //SWIP WITH LEFT
            [nums[left], nums[idx]] = [nums[idx], nums[left]]
            left++;
            idx++;
        }
        else if (nums[idx] === 2) {
            //SWIP WITH RIGHT
            [nums[right], nums[idx]] = [nums[idx], nums[right]]
            right--;
        }
        else {
            idx++;
        }
    }
}
