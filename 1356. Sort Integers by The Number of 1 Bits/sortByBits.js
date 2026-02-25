/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    let ans = []
    let mp = new Map()

    for (let item of arr) {
        if (item === 0) {
            ans.push(0)
            continue
        }
        let bits = item.toString(2).match(/1/g)
        if (!mp.has(bits.length)) mp.set(bits.length, [])
        mp.get(bits.length).push(item)
    }
    const sortedMapByKey = new Map([...mp.entries()].sort((a, b) => a[0] - b[0]));

    // console.log("hash " , sortedMapByKey)

    for (let item of sortedMapByKey) {
        // console.log("item " , item[1])
        item[1].sort((a, b) => a - b)
        ans.push(...item[1])
    }
    // console.log("ans " , ans)
    return ans
};