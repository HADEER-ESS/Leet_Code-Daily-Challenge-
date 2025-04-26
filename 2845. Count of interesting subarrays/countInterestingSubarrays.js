/**
 * @param {number[]} nums
 * @param {number} modulo
 * @param {number} k
 * @return {number}
 */
var countInterestingSubarrays = function (nums, modulo, k) {
    let mp = new Map()
    mp.set(0, 1)
    let prefixSum = 0
    let ans = 0

    for (let num of nums) {
        let add = num % modulo === k ? 1 : 0
        prefixSum += add        //add each number prefix avalability

        //calculate the diff from (PREFIX_SUM) and curr PREFIX
        //x => prefix_sum  ||  y => previous prefix
        // x % modulo - y % modluo === k
        let calc = (prefixSum - k + modulo) % modulo
        ans += (mp.get(calc) || 0)

        mp.set(prefixSum % modulo, (mp.get(prefixSum % modulo) || 0) + 1)
    }
    console.log("map ", mp)
    return ans
}