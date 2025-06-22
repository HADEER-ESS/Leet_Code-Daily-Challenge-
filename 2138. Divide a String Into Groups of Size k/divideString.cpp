#include <iostream>
#include <vector>

using namespace std;



class Solution {
    public:
        vector<string> divideString(string s, int k, char fill) {
            vector<string> res;
            int sz = s.size();
    
            if(sz % k != 0){
                int remain = k - (sz % k);
                for(int i=0 ; i<remain; i++){
                    s+= fill;
                }
            }
    
            for(int i=0 ; i<sz; i+=k){
                res.push_back(s.substr(i,k));
            }
    
            return res;
        }
    };