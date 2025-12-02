/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    let len = nums.length
    //need to create 2*len array
    let ans = new Array(len + len).fill(0)

    for (let i = 0; i < len; i++) {
        ans[i] = nums[i]
        ans[i + len] = nums[i]
    }

    return ans
};


//Another solution using spread operator
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    return [...nums, ...nums]
};