/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */

//SOLUTION #1
//USING => SLICE build-in method
//T.C =>
var divideArray = function (nums, k) {
    const n = nums.length
    nums.sort((a, b) => a - b)
    let groups = n / 3
    let i = 0;
    let res = []

    while (res.length < groups) {
        let sub = nums.slice(i, i + 3)
        res.push(sub)
        i += 3
    }

    for (let sub of res) {
        if (sub[1] - sub[0] > k || sub[2] - sub[0] > k) return []
    }
    return res
};

//SOLUTION #2
//USING => Iteration then Check
//T.C => O(n log n)
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b)
    let sub = []
    let res = []

    for (let i = 0; i <= nums.length; i++) {
        if (i % 3 === 0 && sub.length > 0) {
            res.push(sub)
            sub = []

        }
        sub.push(nums[i])
    }

    for (let sub of res) {
        if (sub[1] - sub[0] > k || sub[2] - sub[0] > k) return []
    }
    return res
};

//SOLUTION #3
//USING => Check While Iteration
//T.C => O(n log n)
var divideArray = function (nums, k) {
    nums.sort((a, b) => a - b)
    let n = nums.length
    let res = []

    for (let i = 0; i < n - 2; i += 3) {
        if (nums[i + 2] - nums[i] > k) return [];
        res.push([nums[i], nums[i + 1], nums[i + 2]])
    }

    return res
};