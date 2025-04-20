/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
    let ans = 0
    let mp = new Map()

    for (let rab of answers) {
        if (!mp.has(rab)) {
            mp.set(rab, 0)
        }
        mp.set(rab, mp.get(rab) + 1)
    }

    //  SECOND SOLUTION #2
    for (let [key] of mp) {
        if (mp.get(key) % (key + 1) === 0) {
            ans += mp.get(key)
        }
        else {
            let cnt = Math.floor(mp.get(key) / (key + 1)) // => there is cnt+1 PAIRS of same color rabbits
            ans += ((key + 1) * (cnt + 1))
        }
    }
    return ans;
};


//  FIRST SOLUTION => come to mind #1
// for(let i=0 ;i<answers.length; i++){
//     let get = mp.get(answers[i])
//     let num = 1 + answers[i]
//     if(get >= num){
//         ans+= num
//         mp.set(answers[i] , get-num)
//     }
// }

// for(let [key] of mp){
//     if(mp.get(key) > 0){
//         ans += key+1
//     }
// }