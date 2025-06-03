/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */

var maxCandies = function (status, candies, keys, containedBoxes, initialBoxes) {
    let len = status.length;
    let visit = new Array(len).fill(false)      //if visit BOX and GET its candies before
    let hasKey = new Array(len).fill(false)     //if have the KEY to open this BOX
    let hasBox = new Array(len).fill(false)     //if PASSED through this BOX before
    let queue = []
    let ans = 0


    for (let box of initialBoxes) {
        hasBox[box] = true

        if (status[box]) {
            queue.push(box)
            visit[box] = true
        }
    }

    while (queue.length) {
        let curr = queue.shift()
        ans += candies[curr];

        //check if Curr box contains KEYS
        for (let box of keys[curr]) {
            if (!hasKey[box]) {
                hasKey[box] = true;
                if (hasBox[box] && !visit[box]) {
                    queue.push(box)
                    visit[box] = true
                }
            }
        }

        //check if Curr box contains another BOX
        //those another BOX must have 1\ status === 1 OR
        // 2\ have its KEY.
        for (let box of containedBoxes[curr]) {
            if (!hasBox[box]) {
                hasBox[box] = true
            }
            if (hasKey[box] || status[box]) {
                if (!visit[box]) {
                    queue.push(box)
                    visit[box] = true
                }
            }
        }
    }

    return ans;
};

/*
maximum number of candies
*/