/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */

 //ASCII for z => 122
 //ASCII for a => 97
 //Alphabet character count is => 26
 var lengthAfterTransformations = function(s, t) {
    const MOD = 1000000007
    let chars = new Array(26).fill(0)

    //count each character appearance
    for(let char of s){
        chars[char.charCodeAt(0)-97]++
    }

    //loop "t" times
    for(let i=0; i<t ;i++){
        let visit = new Array(26).fill(0)

        for(let j=0 ; j<26; j++){
            //when j reach "z"at index 25
            //increment at index 0 and 1 for "a"  and "b" by the cnt of "z"
            if(j === 25){
                visit[0] = (visit[0] + chars[j]) % MOD
                visit[1] = (visit[1] + chars[j]) % MOD
            }
            else{
                //transfered character
                //the init count in "chars" plus the previous character
                visit[j+1] =  (visit[j+1] + chars[j]) % MOD
            }
        }
        chars = visit
    }
    return chars.reduce((acc, curr)=> acc+curr,0)% MOD
};