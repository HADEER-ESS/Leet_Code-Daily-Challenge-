/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
    let ans = numBottles

    while (numBottles >= numExchange) {
        numBottles -= numExchange
        numBottles++
        numExchange++
        ans++
    }

    return ans
};