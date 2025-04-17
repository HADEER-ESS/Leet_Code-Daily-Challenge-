var countPairs = function (nums, k) {
    let len = nums.length
    let ans = 0

    for (let i = 0; i < len - 1; i++) {
        // if(nums.lastIndexOf(nums[i]) === i) continue;
        for (let j = len - 1; j > i; j--) {
            if (nums[i] === nums[j] && i * j % k === 0) {
                ans++
            }
        }
    }

    return ans
};