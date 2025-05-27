/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
    let num1 = 0;   //Sum of integers that not divisable by m
    let num2 = 0;   //Sum of integer that divisable by m

    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {  //divisable
            num2 += i
        }
        else if (i % m !== 0) {   //Not divisable
            num1 += i
        }
    }

    // console.log("Num1 " , num1 , " Num2 " , num2 , " subrtact " , num1-num2)
    return num1 - num2;
};