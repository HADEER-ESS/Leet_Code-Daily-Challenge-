var countVowelStrings = function (n) {
    let res = 0

    function solve(n, idx) {
        if (n === 0) {
            res++
            return
        }
        for (let i = idx; i < 5; i++) {
            solve(n - 1, i)
        }
    }
    solve(n, 0)
    return res
};


//OLD Solution => Cause Time Limit Exceeded
// var countVowelStrings = function (n) {
//     const VOWELS = ["a", "e", "i", "o", "u"];
//     let arr = []

//     function solve(str, idx) {
//         if (str.length === n) {
//             arr.push(str);
//             return;
//         }
//         for (let i = idx; i < 5; i++) {
//             solve(str + VOWELS[i], i)
//         }
//     }

//     for (let i = 0; i < 5; i++) {
//         solve(VOWELS[i], i)
//     }


//     return arr.length
// };