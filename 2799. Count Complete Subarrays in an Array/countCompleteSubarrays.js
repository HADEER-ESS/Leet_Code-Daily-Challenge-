/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    let ans = 0;

    let l = 0;
    let unique = new Set([...nums]).size
    let mp = new Map();

    for (let r = 0; r < nums.length; r++) {
        if (!mp.has(nums[r])) {
            mp.set(nums[r], 0)
        }
        mp.set(nums[r], mp.get(nums[r]) + 1)

        while (mp.size === unique) {
            ans += (nums.length - r)
            mp.set(nums[l], mp.get(nums[l]) - 1)
            if (mp.get(nums[l]) === 0) {
                mp.delete(nums[l])
            }
            l++
        }
    }

    return ans
};