function threeConsecutiveOddss(arr: number[]): boolean {
    let cnt = 0

    for(let num of arr){
        //base case
        if(cnt === 3)return true;
        cnt = num % 2 === 0 ? 0 : cnt + 1;
    }
    return cnt === 3;
};