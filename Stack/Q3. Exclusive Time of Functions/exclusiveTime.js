/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    let stk = []
    let ans = Array(n).fill(0)
    let lastTime = 0

    for (let oper of logs) {
        let [id, type, pos] = oper.split(":")
        // let id = item[0]
        // let type = item[1]
        // let pos = Number(item[2])

        if (type === "start") {
            if (stk.length) {
                ans[stk[stk.length - 1]] += Number(pos) - lastTime
            }
            lastTime = Number(pos)
            stk.push(id)
        }
        else {
            let last = stk.pop()
            ans[last] += Number(pos) - lastTime + 1
            lastTime = Number(pos) + 1
        }

    }
    return ans
};