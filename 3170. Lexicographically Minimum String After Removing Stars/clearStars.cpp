#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        string clearStars(string s) {
            string str;
            int len = s.size();
            vector<vector<int>>idxs(26);
            vector<bool>removed(len,false);
    
            for(int i=0 ; i<len; i++){
                if(s[i] != '*'){
                    idxs[s[i]-97].push_back(i);
                }
                else{
                    for(int chr=0 ; chr<26 ; chr++){
                        if(idxs[chr].size() > 0){
                            int poped = idxs[chr].back();
                            idxs[chr].pop_back();
                            removed[poped] = true;
                            break;
                        }
                    }
                    removed[i] = true;
                }
            }
    
            for(int i=0 ; i<len; i++){
                if(!removed[i]){
                    str+= s[i];
                }
            }
            return str;
        }
    };