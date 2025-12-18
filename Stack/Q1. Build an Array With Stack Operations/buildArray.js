/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let iterate = target[target.length - 1]

    let ans = []

    for (let i = 1; i <= iterate; i++) {
        if (target.includes(i)) {
            ans.push("Push")
        } else {
            ans.push("Push")
            ans.push("Pop")
        }
    }
    return ans;
};