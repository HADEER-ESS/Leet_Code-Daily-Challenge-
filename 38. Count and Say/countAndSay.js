var countAndSay = function (n) {
    //  SOLUTION #2
    let res = "1"

    for (let i = 2; i <= n; i++) {
        res = getNewString(res)
    }
    return res


    //  SOLUTION #1
    // let dp = new Array(31).fill("");
    // for(let i=1; i<=n; i++){
    //     if(i === 1){
    //         dp[i] = "1";
    //         continue
    //     }
    //     let last = dp[i-1]
    //     if(last.length === 1){
    //         dp[i] = "11";
    //         continue
    //     }
    //     let num = last[0]
    //     let cnt = 1
    //     let str = ""
    //     for(let j=1; j<last.length; j++){
    //         if(last[j] === num){
    //             cnt++;
    //         }
    //         else{
    //             str += (cnt+num)
    //             num = last[j];
    //             cnt = 1;
    //         }
    //     }
    //     str += (cnt+num)
    //     dp[i] = str
    // }

    // return dp[n]
};

function getNewString(str) {
    let num = str[0];
    let cnt = 1
    let res = ""

    for (let j = 1; j < str.length; j++) {
        if (str[j] === num) {
            cnt++;
        }
        else {
            res += (cnt + num)
            num = str[j];
            cnt = 1;
        }
    }
    res += (cnt + num);
    return res;
}