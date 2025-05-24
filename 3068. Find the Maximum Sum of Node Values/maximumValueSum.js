/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
//Since toggle is done in pairs, 
//total number of toggles must be even — 
//odd number of beneficial toggles means one can't be done.
var maximumValueSum = function (nums, k, edges) {
    let len = nums.length;

    let sum = 0;
    let cnt = 0

    let min = Infinity

    for (let idx = 0; idx < len; idx++) {

        let original = nums[idx]
        let toggle = nums[idx] ^ k

        if (toggle > original) {
            sum += toggle;
            cnt++
        }
        else {
            sum += original
        }

        let diff = original - toggle

        if (diff < 0) diff = Math.abs(diff)

        //to track the smallest difference between original and toggled value
        //We must choose the one that hurts the sum the least
        min = Math.min(diff, min)
    }

    //CNT must be even as we toggle the node in PAIR
    if (cnt % 2 === 0) {      //even
        return sum
    }

    //when the cnt be (ODD) => means we need to the FLIP BACK the untoggle pair with smallest value
    return sum - min
};
