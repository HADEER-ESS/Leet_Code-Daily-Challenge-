function findEvenNumbeers(digits: number[]): number[] {
    let ans : number[] = [];
    let cnt : number[] = new Array(10).fill(0);
    digits.sort((a,b)=>b-a)     // O( log n)
    let max = 0

    for(let num of digits){
        cnt[num]++;
    }

    //get the max number can be formed from digits
    //MAX
    for(let i=0 ;i<3; i++){
        max += digits[i]
        if(i<2)max *= 10
    }

    for(let i=100; i<=max; i+=2){
        //check if all integers are include in (digits) array
        let three = Math.floor(i / 100)
        let two = Math.floor(i / 10) % 10
        let one = i % 10
        let success = true

        if(--cnt[three] < 0){
            success = false
        }
        if(--cnt[two] < 0){
            success = false
        }
        if(--cnt[one] < 0){
            success = false
        }

        if(success)ans.push(i)

        cnt[three]++
        cnt[two]++
        cnt[one]++
    }

    return ans;
};