#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    string orderlyQueue(string s, int k) {
        
        if(k == 1){
            string best = s;

            for(int i=1; i<best.size(); i++){
                string rev = s.substr(i) + s.substr(0,i);
                if(rev < best) best = rev;
            }
            return best;
        }else{
            string str = s;
            sort(str.begin(), str.end());
            return str;
        }
    }
};