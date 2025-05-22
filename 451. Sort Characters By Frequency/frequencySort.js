/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let freq = {}
    let ans = ''

    for (let chr of s) {                                          //O(n)
        freq[chr] = (freq[chr] || 0) + 1
    }

    let sort = Object.entries(freq).sort((a, b) => b[1] - a[1])      //O(n log n)

    for (let [str, cnt] of sort) {                                //O(n)
        ans += str.repeat(cnt)
    }

    return ans;
};