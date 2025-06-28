/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
    let pairs = []
    let res = []

    for (let i = 0; i < nums.length; i++) {
        pairs.push({ "num": nums[i], "idx": i })
    }
    pairs.sort((a, b) => b.num - a.num)

    let sorted = pairs.slice(0, k)

    sorted.sort((a, b) => a.idx - b.idx)

    for (let { num, idx } of sorted) {
        res.push(num)
    }

    return res
};