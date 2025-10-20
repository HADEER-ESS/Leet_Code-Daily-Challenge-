/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let x = 0

    for (let oper of operations) {
        if (oper === "++X" || oper === "X++") {
            x++;
        }
        else {
            x--;
        }
    }

    return x;
};