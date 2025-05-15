#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<string> getLongestSubsequence(vector<string>& words, vector<int>& groups) {
        vector<string> ans = {words[0]};
        int lastIndex = 0;

        for(int i=1; i<words.size(); i++){
            if(groups[lastIndex] != groups[i]){
                ans.push_back(words[i]);
                lastIndex = i;
            }
        }

        return ans;
    }
};