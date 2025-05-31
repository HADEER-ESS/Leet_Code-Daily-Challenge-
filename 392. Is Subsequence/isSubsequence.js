/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let s_pointer = 0
    let t_pointer = 0
    while (s_pointer < s.length) {
        if (t_pointer === t.length && s_pointer < s.length) return false;

        if (s[s_pointer] === t[t_pointer]) {
            s_pointer++;
            t_pointer++;
        }
        else {
            t_pointer++;
        }
    }

    return true;
};