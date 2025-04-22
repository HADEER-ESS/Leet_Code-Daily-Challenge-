//First solution where I use 
//=>Back Tracking Algorithm SOLUTION #1
//=> Solve 21 out of 47
var idealArrays = function (n, maxValue) {
    let ans = []
    let cnt = 0;
    const MOD = 1000000007

    function solve(arr) {
        if (arr.length === n) {
            cnt++
            return;
        }
        for (let i = 1; i <= maxValue; i++) {
            //if the length > 0
            if (arr.length > 0) {
                if (i % arr[arr.length - 1] !== 0) continue
            }
            //do
            arr.push(i)
            //recursion
            solve(arr)
            //undo
            arr.pop()
        }
    }

    solve(ans)

    return cnt % MOD
};


//Second solution where I use 
//=>Dynamic Programming SOLUTION #2
//=> Solve 35 out of 47
var idealArrays = function (n, maxValue) {
    let mp = new Map()
    const MOD = 1000000007

    function solve(idx, last) {
        let key = `${idx}-${last}`
        if (mp.has(key)) return mp.get(key);
        //base case
        if (idx === n) return 1;
        let total = 0
        for (let next = last; next <= maxValue; next += last) {
            total = (total + solve(idx + 1, next)) % MOD
        }
        mp.set(key, total)
        return total
    }
    return solve(0, 1)
};