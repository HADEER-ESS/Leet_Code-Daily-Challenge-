#include <iostream>

using namespace std;

class Solution {
    public:
        bool isSubsequence(string s, string t) {
            int p1 = 0; //for S
            int p2 = 0; //for T
    
            while(p1 < s.size()){
                if(p2 == t.size() && p1<s.size()) return false;
    
                if(s[p1] == t[p2]){
                    p1++;
                    p2++;
                }
                else{
                    p2++;
                }
            }
            return true;
        }
    };