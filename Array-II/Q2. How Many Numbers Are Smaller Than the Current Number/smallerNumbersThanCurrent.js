/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let ans = []

    for (let i = 0; i < nums.length; i++) {
        let cnt = 0
        for (let j = 0; j < nums.length; j++) {

            if (j !== i && nums[j] < nums[i]) {
                cnt++
            }
        }
        ans.push(cnt)
    }

    return ans
};

//SECOND SOLUTION USING MAP AND SORT

var smallerNumbersThanCurrent = function (nums) {
    let srt = [...nums]
    srt.sort((a, b) => a - b)

    let mp = new Map()

    for (let i = 0; i < srt.length; i++) {
        if (!mp.has(srt[i])) {
            mp.set(srt[i], i)
        }
    }

    return nums.map((num) => mp.get(num))
};