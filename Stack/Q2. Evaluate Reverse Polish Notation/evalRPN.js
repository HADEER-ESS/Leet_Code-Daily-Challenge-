/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stk = []

    for (let oper of tokens) {
        if (oper !== "+" && oper !== "-" && oper !== "/" && oper !== "*") {
            stk.push(parseInt(oper))
        }
        else {
            let second = stk.pop()
            let first = stk.pop()
            let num = 0
            switch (oper) {
                case "+":
                    num = first + second
                    break;
                case "/":
                    num = first / second
                    break;
                case "-":
                    num = first - second
                    break;
                case "*":
                    num = first * second
                    break
            }
            stk.push(parseInt(num))
        }
    }
    return stk[0]
};