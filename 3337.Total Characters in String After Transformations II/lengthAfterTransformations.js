//Solution #1
//529 / 536 testcases passed


/**
 * @param {string} s
 * @param {number} t
 * @param {number[]} nums
 * @return {number}
 */
var lengthAfterTransformations = function(s, t, nums) {
    const MOD = 1000000007;
    let chars = new Array(26).fill(0)

    for(let i=0 ;i<s.length; i++){
        chars[s.charCodeAt(i) - 97]++;
    }

    for(let i=0 ; i<t; i++){
        let visit = new Array(26).fill(0);

        for(let ch=0 ; ch<26; ch++){
            
            for(let j=1 ; j<=nums[ch]; j++){
                visit[(26 + ch+j) % 26] = (visit[(26 + ch+j) % 26] + chars[(ch+ 26) % 26]) % MOD
            }
        }

        chars = visit;
    }
    return chars.reduce((acc, curr) => acc+curr , 0) % MOD
};