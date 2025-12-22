/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temp) {

    const len = temp.length
    let ans = Array(len).fill(0)
    let pt = len - 1
    let stk = []

    //O(n^2) Nested Loop
    // for(let i=0; i<len-1; i++){
    //     for(let j=i+1; j<len; j++){
    //         if(temp[j] > temp[i]){
    //             ans[i] = j-i
    //             break
    //         }
    //     }
    // }

    //O(n) Monotonic Stack
    while (pt > -1) {
        //if stack not empty
        if (stk.length) {
            if (temp[stk[stk.length - 1]] > temp[pt]) {
                ans[pt] = stk[stk.length - 1] - pt
                stk.push(pt)
                pt--
            }
            else {
                stk.pop()
            }
        }
        //Stack is empty
        else {
            stk.push(pt)
            pt--
        }

    }

    return ans
};