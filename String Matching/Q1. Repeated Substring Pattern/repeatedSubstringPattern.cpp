#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        int sz = s.size();
        int mid = sz/2;

        for(int i=1; i<=mid; i++){
            string sub = s.substr(0,i);
            int rep = sz / sub.size();
            string form = "";

            //repeat
            while(rep > 0){
                form+=sub;
                rep--;
            }
            if(form == s)return true;
        }

        return false;
    }
};