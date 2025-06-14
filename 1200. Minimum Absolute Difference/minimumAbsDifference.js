/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b)
    let diff = Infinity
    let res = []

    for (let i = 1; i < arr.length; i++) {
        let abs = Math.abs(arr[i] - arr[i - 1])
        diff = Math.min(diff, abs)
    }

    for (let i = 1; i < arr.length; i++) {
        let abs = Math.abs(arr[i] - arr[i - 1])
        if (abs === diff) {
            res.push([arr[i - 1], arr[i]])
        }
    }

    return res;
};