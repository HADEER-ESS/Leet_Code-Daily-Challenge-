/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let cnt = 0


    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            cnt += Math.min(tickets[i], tickets[k])
        }
        else {
            cnt += Math.min(tickets[i], tickets[k] - 1)
        }

    }

    return cnt
};