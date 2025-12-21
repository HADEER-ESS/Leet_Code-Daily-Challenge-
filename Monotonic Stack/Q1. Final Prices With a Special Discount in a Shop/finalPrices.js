/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    const len = prices.length
    for (let i = 0; i < len - 1; i++) {

        for (let j = i + 1; j < len; j++) {
            if (prices[j] <= prices[i]) {
                prices[i] -= prices[j]
                break;
            }
        }
    }
    return prices


    // let ans = Array(len)

    // let stk = []

    // let start = len - 1

    // while(start >= 0){
    //     console.log("stk " , stk)
    //     //not empty
    //     if(stk.length){
    //         //check if the last
    //         if(stk[stk.length-1] <= prices[start]){
    //             ans[start] = prices[start] - stk[stk.length-1]
    //             stk.push(prices[start])
    //             start--
    //         }
    //         else{
    //             stk.pop()
    //         }
    //     }
    //     //empty
    //     else{
    //         ans[start] = prices[start];
    //         stk.push(prices[start])
    //         start--;
    //     }
    // }

    // return ans;
};