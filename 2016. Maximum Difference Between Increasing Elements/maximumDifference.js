/**
 * @param {number[]} nums
 * @return {number}
 */

//SOLUTION #1
// T.C => O(n^2)
var maximumDifference = function (nums) {
    let res = -1;

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            res = Math.max(res, nums[j] - nums[i])
        }
    }

    return res ? res : -1;
};

//SOLUTION #2
// T.C => O(n)
var maximumDifference = function (nums) {
    let min = nums[0];
    let res = -1;


    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min) {
            res = Math.max(res, nums[i] - min)
        }
        min = Math.min(min, nums[i])
    }

    return res
};