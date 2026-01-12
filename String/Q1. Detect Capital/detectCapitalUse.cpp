#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    bool detectCapitalUse(string word) {
        int cnt = 0;
        int pos = -1;

        for(int i=0; i<word.size(); i++){
            if(word[i] >= 'A' && word[i] <= 'Z'){
                cnt++;
                pos = i;
            }
        }

        if(cnt == word.size())return true;
        if(cnt == 0)return true;
        if(cnt == 1 && pos == 0)return true;
        return false;
    }
};