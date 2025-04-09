var minOperations = function (nums, k) {
    let min = Math.min(...nums);
    let arr = new Array(101).fill(false)
    let ans = 0

    // handle the impossible case
    if (min < k) return -1;

    // count distinct integer in array, greater than K 
    for (let num of nums) {
        if (num > k && !arr[num]) {
            ans++
            arr[num] = true
        }
    }

    return ans

};