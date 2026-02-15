/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    //convert each BINARY STRING to its INTEGER valie
    // let num1 = BigInt("0b" + a)
    // let num2 = BigInt("0b" + b)

    //SUM the integer for both
    // let sum = BigInt("0b" + a) + BigInt("0b" + b)

    //return the BINARY STRING of result
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2)
};