var countSymmetricIntegers = function (low, high) {
    let cnt = 0

    for (let num = low; num <= high; num++) {
        let str = num.toString()

        if (str.length % 2 === 1) continue;
        let mid = str.length / 2;
        let leftSum = 0
        let rightSum = 0
        for (let i = 0; i < mid; i++) {
            leftSum += parseInt(str[i])
            rightSum += parseInt(str[mid + i])
        }
        if (leftSum === rightSum) cnt++
    }

    return cnt;
};