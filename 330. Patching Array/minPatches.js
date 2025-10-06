/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let miss = 1;
    let patch = 0;
    let start = 0;

    while (miss <= n) {
        if (nums[start] <= miss) {
            //update the range can be cover
            miss += nums[start]
            start++
        }
        else {
            //patch
            patch++
            //update range
            miss += miss
        }
    }

    return patch;
};

//we can form from Patch => next + patch -1 =...