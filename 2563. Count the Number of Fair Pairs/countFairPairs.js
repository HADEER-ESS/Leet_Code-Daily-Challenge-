
var countFairPairs = function (nums, lower, upper) {
    nums.sort((a, b) => a - b);

    function countPairs(target) {
        let left = 0;
        let right = nums.length - 1
        let cnt = 0
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum > target) {
                right--
            }
            else {
                cnt += (right - left)
                left++
            }
        }
        return cnt;
    }
    return countPairs(upper) - countPairs(lower - 1)
};