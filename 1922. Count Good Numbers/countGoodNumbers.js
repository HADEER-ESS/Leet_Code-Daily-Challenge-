var countGoodNumbers = function (n) {
    const MOD = 1000000007n
    let big_n = BigInt(n)
    const EVEN = (big_n + 1n) / 2n
    const ODD = big_n / 2n

    let evenPart = calcPower(5n, EVEN, MOD)
    let oddPart = BigInt(calcPower(4n, ODD, MOD))

    return Number((evenPart * oddPart) % MOD)
};

function calcPower(base, power, MOD) {
    //Recursion  
    if (power === 0n) return 1;

    let half = calcPower(base, power / 2n, MOD)
    let res = BigInt(half * half) % MOD
    if (power % 2n === 1n) res *= base
    return res;

    //Looping

    // while(power > 0n){
    //     if(power % 2n === 1n){//ODD
    //         res = (res * base) % MOD
    //     }
    //     power /= 2n
    //     base = (base*base) % MOD
    // }

    // return res
}