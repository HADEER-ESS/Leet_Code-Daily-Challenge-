/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let mp = new Array(3).fill(0);
    let pointer = 0
    let start = 0

    for(let num of nums){
        mp[num]++
    }
    
    while(start < nums.length){
        if(mp[pointer] === 0){
            pointer++;
        }
        else{
            nums[start] = pointer;
            mp[pointer]--;
            start++;
        }
    }
};