/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function (num) {
    let large = num
    let small = num

    let str = String(num)

    //create the SMALL number can be formed from num
    if (str[0] === "1") {
        for (let i = 1; i < str.length; i++) {
            if (str[i] !== "0" && str[i] !== "1") {
                small = parseInt(str.replaceAll(str[i], '0'))
                break;
            }
        }
    }
    else {
        small = parseInt(str.replaceAll(str[0], '1'))
    }


    //create the LARGE number can be formed from num
    for (let chr of str) {
        if (chr !== "9") {
            large = parseInt(str.replaceAll(chr, '9'))
            break
        }
    }

    return large - small
};