/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    //between 2 -> n-2
    for (let i = 2; i <= n - 2; i++) {
        //if not palindrom => return FALSE
        let conv = n.toString(i)
        let rev = conv.split("").reverse().join("")
        if (conv !== rev) return false;
    }

    return true;
};