/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let ans = [words[0]]
    let lastIndex = 0

    for(let i=1 ; i<words.length ;i++){
        if(groups[lastIndex] !== groups[i]){
            ans.push(words[i])
            lastIndex = i
        }
    }

    return ans;
};