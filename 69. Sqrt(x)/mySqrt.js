var mySqrt = function (x) {
    let ans = 0
    let start = 1;
    let end = x;
    let mid;

    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        console.log("mid ", mid)
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            ans = mid;
            break;
        }
        else if ((mid * mid) > x) {
            end = mid - 1
        }
        else {
            start = mid + 1
        }
    }
    return ans;
};