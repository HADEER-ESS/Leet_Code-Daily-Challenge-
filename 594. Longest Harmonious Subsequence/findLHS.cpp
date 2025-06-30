#include <iostream>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

class Solution {
    public:
        int findLHS(vector<int>& nums) {
            unordered_map<int,int> mp;
            int res = 0;
    
            for(auto num : nums){
                mp[num]+=1;
            }
    
            for(const auto& [num, cnt] : mp){
                if(mp.count(num+1)){
                    int sum = cnt + mp[num+1];
                    res = max(res, sum);
                }
            }
    
            return res;
        }
    };