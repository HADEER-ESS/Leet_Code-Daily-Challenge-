/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function (nums) {
    const len = nums.length
    let res = new Array(len).fill(0)

    for (let i = 0; i < len; i++) {
        let val = nums[i]
        if (val !== 0) {
            const idx = ((i + val) % len + len) % len
            res[i] = nums[idx]
        }
    }
    return res;
};