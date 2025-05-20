/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    let cnt = 0;
    const len = nums.length;
    const diff = new Array(len+1).fill(0)

    //calc the differences of the substitute will be for every index
    //the index that out of scoop withh be PLUSED as it won't be minus at curr step *confition*
    for(let data of queries){
        let [start, end] = data;
        diff[start]--
        if(end+1 < len){
            diff[end+1]++
        }
    }

    //create a prefix-sum to sum the possible differences
    let prefixSum = 0
    for(let i=0 ; i<len; i++){
        prefixSum += diff[i]
        nums[i] += prefixSum
        if(nums[i] <= 0)cnt++
    }


    return cnt === len
};

/**
Time Complexity => O(q * n)
Cause TLE
-----------------------------
for(let i=0 ; i<queries.length; i++){
    let range = queries[i]
    for(let j=range[0]; j<=range[1]; j++){
        if(nums[j] === 0)continue;
        nums[j]--
    }
}

return nums.every(item => item===0)
 */