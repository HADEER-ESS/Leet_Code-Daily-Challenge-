/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    if (stones.length === 1) return stones[0];


    while (stones.length > 1) {
        stones.sort((a, b) => a - b)

        let first = stones.pop()
        let sec = stones.pop()
        if (first != sec) {
            stones.push(first - sec)
        }
    }
    return stones.length === 1 ? stones[0] : 0
};