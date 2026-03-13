/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    //n+1
    const len = gain.length;
    let arr = new Array(len).fill(0)

    for (let i = 0; i < len; i++) {
        arr[i + 1] = arr[i] + gain[i]
    }
    return Math.max(...arr)
    // let max = arr[0]

    // for(let i=1; i<arr.length; i++){
    //     if(arr[i] > max) max = arr[i]
    // }
    // return max
};