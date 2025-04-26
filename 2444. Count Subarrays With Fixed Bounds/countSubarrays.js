//Solution #1
//create a Nested Loop to get every subArray in given array
//with O(n^2) Time Complexity 
// solve 48 out of 53
var countSubarrays = function (nums, minK, maxK) {
    let ans = 0;

    for (let l = 0; l < nums.length; l++) {
        if (nums[l] < minK || nums[l] > maxK) continue;
        let arr = [nums[l]]
        if (arr.includes(minK) && arr.includes(maxK)) ans++
        for (let r = l + 1; r < nums.length; r++) {
            if (nums[r] < minK || nums[r] > maxK) break;
            arr.push(nums[r])
            if (arr.includes(minK) && arr.includes(maxK)) ans++
        }
    }

    return ans;
};