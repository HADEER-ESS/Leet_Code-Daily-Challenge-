//Solution #1
//create a Nested Loop to get every subArray in given array
//with O(n^2) Time Complexity 
// solve 49 out of 53
var countSubarrays = function (nums, minK, maxK) {

    //base case
    let len = nums.length
    let reduce = nums.reduce((acc, curr) => acc + curr, 0)
    if (reduce / nums[0] === len && minK === maxK && minK === nums[0]) return (len * (len + 1)) / 2


    let ans = 0;

    for (let l = 0; l < len; l++) {
        if (nums[l] < minK || nums[l] > maxK) continue;
        let arr = [nums[l]]
        if (arr.includes(minK) && arr.includes(maxK)) ans++
        for (let r = l + 1; r < len; r++) {
            if (nums[r] < minK || nums[r] > maxK) break;
            arr.push(nums[r])
            if (arr.includes(minK) && arr.includes(maxK)) ans++
        }
    }

    return ans;
};