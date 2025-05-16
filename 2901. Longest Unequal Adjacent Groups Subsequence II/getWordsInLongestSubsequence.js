/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    let dp = []
    let max = 1

    for(let i=0 ; i<words.length; i++){
        dp[i] = [words[i]]

        for(let j=i-1; j>=0; j--){
            //SKIP
            if(words[i].length !== words[j].length || groups[i] === groups[j]) continue;

            // has hamming distance equal 1
            if(checkHamming(words[i], words[j])){
                console.log("iiii " , dp[i] , "\n jjjjj " ,  dp[j])
                if(dp[i].length > dp[j].length) continue;
                
                dp[i] = [...dp[j], words[i]]
                // console.log("neww " , dp[i])
                max = Math.max(max, dp[i].length)
            }
        }
    }
    for(let item of dp){
        if(item.length === max) return item
    }
    return []
};


// return true if the strings are hamming strings
function checkHamming(f_str, s_str){
    let len = 0

    for(let i=0 ; i<f_str.length; i++){
        if(f_str[i] !== s_str[i]) len++
    }

    return len === 1;
}