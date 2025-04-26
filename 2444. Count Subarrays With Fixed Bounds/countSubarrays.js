//Solution #1
//create a Nested Loop to get every subArray in given array
//with O(n^3) Time Complexity 
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


//Solution #2
//create a Nested Loop to get every subArray in given array
//use HAS_MIN and HAS_MAX variables with O(1) instead of INCLUDES with O(n)
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

        let hasMin = (nums[l] === minK)
        let hasMax = (nums[l] === maxK)
        if (hasMin && hasMax) ans++;
        for (let r = l + 1; r < len; r++) {
            if (nums[r] < minK || nums[r] > maxK) break;
            if (nums[r] === minK) hasMin = true
            if (nums[r] === maxK) hasMax = true
            if (hasMin && hasMax) ans++
        }

    }

    return ans;
};

//Solution #3
//create a Loop to get every subArray in given array
//use LAST_MIN, LAST_MAX, LAST_INVALID variables => to store the index of each and create an equation
//with O(n) Time Complexity 
var countSubarrays = function (nums, minK, maxK) {
    let ans = 0;
    let lastMin = -1, lastMax = -1, lastInvalid = -1;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            lastInvalid = i;
        }
        if (nums[i] === minK) {
            lastMin = i;
        }
        if (nums[i] === maxK) {
            lastMax = i;
        }

        let validStart = Math.min(lastMin, lastMax);
        if (validStart > lastInvalid) {
            ans += validStart - lastInvalid;
        }
    }

    return ans;
};