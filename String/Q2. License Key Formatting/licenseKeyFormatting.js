/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let arr = s.split("-")
    let str = arr.join("").toUpperCase()
    let len = str.length
    let ans = ''


    let word = len / k
    let rest = len % k

    ans += str.substring(0, rest)

    while (word > 0 && rest < len) {
        if (ans.length === 0) {
            ans += str.substring(rest, rest + k)
        }
        else {
            ans += "-" + str.substring(rest, rest + k)
        }
        rest += k
        word--
    }

    return ans

};