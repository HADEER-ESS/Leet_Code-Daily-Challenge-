/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)

    let ans = []

    for (let i = 0; i < nums.length - 2; i++) {
        //SKIP doublication for I iterator
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]


            if (sum === 0) {
                ans.push([nums[i], nums[left], nums[right]])
                //SKIP dpublication for left and right iterator
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--

                right--
                left++
            }
            else if (sum > 0) {
                //need to decrement the MAX (positive) number
                right--
            }
            else {
                //need to increment the MIN (negative) number
                left++
            }
        }
    }


    return ans;
};