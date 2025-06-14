/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function (num) {
    let str = num.toString();

    let small = "0"
    let large = ""
    let target = null

    //to get the SMALLEST number => that start with 0
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[0]) {
            small += "0"
        }
        else {
            small += str[i]
        }
    }

    //to get the LARGEST number => it must start with 9
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "9") {
            large += "9"
        }
        else if (target === null) {
            target = str[i]
            large += "9"
        }
        else if (target && str[i] === target) {
            large += "9"
        }
        else {
            large += str[i]
        }

    }
    return large - small
};