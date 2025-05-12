/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let ans = [];
    let cnt = new Array(10).fill(0);

    for(let num of digits){
        cnt[num]++
    }
    
    for(let i=100; i<=999; i+=2){           // O(n)
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