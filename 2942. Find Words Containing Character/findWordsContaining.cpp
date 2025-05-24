#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        vector<int> findWordsContaining(vector<string>& words, char x) {
            vector<int> ans;
    
            for(int i=0 ; i<words.size(); i++){
                for(auto chr : words[i]){
                    if(chr == x){
                        ans.push_back(i);
                        break;
                    }
                }
            }
    
            return ans;
        }
    };