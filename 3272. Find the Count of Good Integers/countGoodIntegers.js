/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function (n, k) {
    let ans = 0
    let res = genarateNumbers(n, k)  // <= genarate all possible number that match K-palindrom conditions
    //for factorial memorization
    let arr = Array(n + 1).fill(-1);
    arr[0] = 1;
    arr[1] = 1;
    factorial(n, arr)
    let st = new Set()

    for (let item of res) {
        let check = item.split("").sort((a, b) => a - b).join('')
        if (!st.has(check)) {
            let num = permutations(n, item, arr)
            ans += num
            st.add(check)
        }

    }
    return ans
};

//get all possibilities
function permutations(len, str, mp) {
    let ans = 1
    let zeros = 1
    let hash = {}
    let res;

    for (let chr of str) {
        if (!hash[chr]) {
            hash[chr] = 0
        }
        hash[chr] += 1;
    }
    for (let key in hash) {
        let valu = hash[key]
        ans *= mp[valu]
    }
    if (str.includes("0")) {
        hash["0"] -= 1
        for (let key in hash) {
            let valu = hash[key]
            zeros *= mp[valu]
        }
        res = Math.floor(mp[len] / ans) - Math.floor(mp[len - 1] / zeros)
    }
    else {
        res = Math.floor(mp[len] / ans)
    }
    return res
}

//calculate factorial for each
function factorial(num, mp) {
    //Dynamic programming       =>      Iteration 
    for (let i = 0; i <= num; i++) {
        if (mp[i] === -1) {
            mp[i] = i * mp[i - 1]
        }
    }
}

//function to genarate all possible numbers which match k-palindrom conditions
function genarateNumbers(len, target) {
    let mid = Math.ceil(len / 2)
    let res = []

    function backTrack(arr) {
        if (arr.length === mid) {
            // Build full number by mirroring
            const mirror = arr.slice();
            const full = [...arr, ...mirror.slice(0, len % 2 === 0 ? mid : mid - 1).reverse()];
            if (parseInt(full.join('')) % target === 0) {
                res.push(full.join(''));
            }
            return;
        }

        for (let i = 0; i <= 9; i++) {
            //number must't start with ZERO
            if (i === 0 && arr.length === 0) continue
            //do
            arr.push(i)
            //recursion
            backTrack(arr)
            //undo
            arr.pop()
        }
    }

    backTrack([],)
    return res
}