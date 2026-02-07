#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int minimumDeletions(string s) {
        int b_cnt= 0;
        int ans = 0;

        for(auto& chr : s){
            if(chr == 'b')b_cnt++;
            else if(b_cnt > 0){
                b_cnt--;
                ans++;
            }
        }
        return ans;
    }
};