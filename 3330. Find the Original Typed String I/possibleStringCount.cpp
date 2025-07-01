#include <iostream>

using namespace std;

class Solution {
    public:
        int possibleStringCount(string word) {
            char chr = word[0];
            int res = 1;
    
            for(int i=1; i<word.size(); i++){
                if(word[i] == chr){
                    res++;
                }
                else{
                    chr = word[i];
                }
            }
            return res;
        }
    };