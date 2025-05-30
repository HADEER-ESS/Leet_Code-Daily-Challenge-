/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
    let nodes = edges.length;
    let cnt = 0
    let mp1 = {}
    let mp2 = {}

    //first node
    while (node1 !== -1 && mp1[node1] === undefined) {
        mp1[node1] = cnt;
        cnt++
        node1 = edges[node1]
    }

    cnt = 0;
    //second node
    while (node2 !== -1 && mp2[node2] === undefined) {
        mp2[node2] = cnt;
        cnt++;
        node2 = edges[node2]
    }

    // console.log("map one " , mp1, "\nmap two " , mp2)
    let max = Infinity
    let res = -1

    for (let i = 0; i < edges.length; i++) {
        if (mp1[i] === undefined || mp2[i] === undefined) continue;
        let localMax = Math.max(mp1[i], mp2[i])
        if (localMax < max) { //the minimum max distance.
            max = localMax;
            res = i
        }
    }

    return res;
};