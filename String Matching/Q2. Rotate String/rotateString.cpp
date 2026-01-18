#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    bool rotateString(string s, string goal) {
        int sz = s.size();
        int idx = 0;

        while(idx < sz){
            string rev = s.substr(idx) + s.substr(0,idx);

            if(rev == goal)return true;
            idx++;
        }
        return false;
    }
};