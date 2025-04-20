#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    int numRabbits(vector<int>& answers) {
        int ans = 0;
        int max = 0;
        for(auto num : answers){
            if(num > max){
                max = num;
            }
        }
        vector<int> mp(max+1);

        for(auto num : answers){
            mp[num] += 1;
        }

        for(int i=0 ;i<mp.size(); i++){
            if(mp[i] % (i+1) == 0){
                ans += mp[i];
            }
            else{
                int cnt = mp[i] / (i+1);
                ans += ((i+1) * (cnt+1));
            }
        }
        return ans;
    }
};