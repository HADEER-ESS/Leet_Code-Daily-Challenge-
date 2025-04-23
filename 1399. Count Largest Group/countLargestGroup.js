/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
    let ans = 0;
    let max = 0;
    let mp = new Map();

    for (let i = 1; i <= n; i++) {
        // let sum = String(i).split('').reduce((acc,curr)=> parseInt(acc) + parseInt(curr) , 0)
        let sum = getDigitSum(i)
        if (!mp.has(sum)) {
            mp.set(sum, 0)
        }
        mp.set(sum, mp.get(sum) + 1)
        max = Math.max(mp.get(sum), max)
    }
    for (let [key, value] of mp) {
        if (value === max) ans++
    }
    return ans;
};

function getDigitSum(num) {
    let sum = 0

    while (num > 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum;
}