/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const len = nums.length;
    let double = 0
    let missed = 0

    nums.sort((a, b) => a - b)

    //get the doublicate number
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            double = nums[i]
            break
        }
    }

    //get the missed number
    for (let i = 1; i <= len; i++) {
        if (!nums.includes(i)) {
            missed = i
            break
        }
    }

    return [double, missed];
};

//SECOND SOLUTION USING HASH-TABLE
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const len = nums.length;
    let double = 0;
    let missed = 0;
    let hash = {}

    for (let i = 1; i <= len; i++) {
        hash[i] = 0
    }

    for (let num of nums) {
        hash[num] += 1
    }

    for (let key in hash) {
        if (hash[key] > 1) {//2
            double = parseInt(key)
        }
        if (hash[key] < 1) {//0
            missed = parseInt(key)
        }
    }

    return [double, missed]
};