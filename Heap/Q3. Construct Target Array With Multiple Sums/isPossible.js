/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function (target) {
    let pq = new MaxPriorityQueue()
    let sum = 0

    for (let num of target) {
        pq.enqueue(num)
        sum += num
    }

    while (true) {
        let max = pq.dequeue()
        let remain = sum - max

        if (remain === 1 || max === 1) return true
        if (remain === 0 || max < remain) return false

        let mod = max % remain
        if (mod === 0) return false

        pq.enqueue(mod)
        sum = remain + mod
    }
};