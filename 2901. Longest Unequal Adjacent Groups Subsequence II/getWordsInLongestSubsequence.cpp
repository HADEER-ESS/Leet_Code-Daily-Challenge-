#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    bool checkHamming(string word1, string word2){
        int cnt = 0;

        for(int i=0; i<word1.size(); i++){
            if(word1[i] != word2[i])cnt++;
            if(cnt > 1) return false;
        }

        return cnt == 1;
    }
    vector<string> getWordsInLongestSubsequence(vector<string>& words, vector<int>& groups) {
        vector<vector<string>> dp(words.size());
        size_t maximum = 1;

        for(int outer = 0; outer<words.size(); outer++){
            dp[outer] = {words[outer]};
            for(int inner = outer-1; inner >= 0 ; inner--){

                if(
                    words[inner].size() != words[outer].size() || 
                    groups[inner] == groups[outer]
                    )continue;

                if(checkHamming(words[inner], words[outer])){
                    if(dp[outer].size() > dp[inner].size()) continue;
                    dp[outer]= dp[inner];
                    dp[outer].push_back(words[outer]);
                    maximum = max(maximum, dp[outer].size());
                }
            }
        }

        for(auto data : dp){
            if(data.size() == maximum) return data;
        }

        return {};
    }
};