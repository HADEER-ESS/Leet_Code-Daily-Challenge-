/**
 * @param {number[]} differences
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var numberOfArrays = function (differences, lower, upper) {
    let left = 0
    let max = lower;

    let ans = lower
    let start = lower

    while (left < differences.length) {               //O(n)
        let sum = ans + differences[left]
        if (sum > upper) return 0;
        if (sum >= lower && sum <= upper) {
            ans = sum
            left++
            max = Math.max(max, ans)
        }
        else {
            left = 0
            start++;
            ans = start;
            max = start
        }
    }
    return (upper - max) + 1
};