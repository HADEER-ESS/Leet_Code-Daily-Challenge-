/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let sum1 = 0;
    let sum2 = 0;

    for(let num of nums1){
        if(num === 0)sum1+=1
        else{                                                                                               
            sum1+= num
        }
    }

    for(let num of nums2){
        if(num === 0)sum2+=1
        else{
            sum2+= num
        }
    }
    let max = Math.max(sum1, sum2)
    if((sum1 === max || nums1.includes(0)) && (sum2 === max || nums2.includes(0)))return max;
    return -1
};