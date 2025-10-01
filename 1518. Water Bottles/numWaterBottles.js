/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {

    let ans = numBottles

    while (numBottles >= numExchange) {
        ans += Math.floor(numBottles / numExchange)
        numBottles = Math.floor(numBottles / numExchange) + (numBottles % numExchange)
    }

    return ans;
};