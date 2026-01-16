/**
 * @param {string} s
 * @return {string}
 */
var maskPII = function (s) {
    let ans = ''
    //CHECK the given s is PHONE or EMAIL
    if (/\d/.test(s)) {
        let phone = ''
        for (let chr of s) {
            if (chr >= 0 && chr <= 9 && chr !== " ") {
                phone += chr
            }
        }

        let remain = phone.length - 10
        if (remain === 0) ans += "***-***-"
        else if (remain === 1) ans += "+*-***-***-"
        else if (remain === 2) ans += "+**-***-***-"
        else ans += "+***-***-***-"
        ans += phone.substring(phone.length - 4)
    }
    else {
        ans += s[0].toLowerCase()
        ans += "*****"
        let idx = s.indexOf("@")
        ans += s[idx - 1].toLowerCase()
        ans += s.substring(idx).toLowerCase()
    }
    return ans
};

//name @ domain .(not the first of last character)
//EMAIL  (MASK)
//UpperCase Letters         =>  LowerCase Letters (name and domain)
//middle latters in NAME (not first or last)        =>      replaced *****
//PHONE
//contain 10 - 13 digit
// (0-3) => countrycode     (0-10 || 3-13) local number