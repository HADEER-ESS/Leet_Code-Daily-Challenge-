var myPow = function (x, n) {
    let N = n

    if (N < 0) {
        x = 1 / x
        N = -N
    }

    function powerHelper(x, n) {
        if (n === 0) return 1;
        let half = powerHelper(x, Math.floor(n / 2))
        let res = half * half
        if (n % 2 === 1) res *= x
        return res
    }

    return powerHelper(x, N)


    // let res = x ** n
    // return res
};