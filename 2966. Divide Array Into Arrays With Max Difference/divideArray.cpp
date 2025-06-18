#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
    public:
        vector<vector<int>> divideArray(vector<int>& nums, int k) {
            sort(nums.begin(), nums.end());
            vector<vector<int>> res;
    
            for(int i=0 ; i<nums.size()-2; i+=3){
                int a = nums[i];
                int b = nums[i+1];
                int c = nums[i+2];
    
                if(c-a > k)return {};
                res.push_back({a,b,c});
            }
            // vector<int> sub;
            // vector<vector<int>> res;
    
            // for(int i=0; i<=nums.size(); i++){
            //     if(i%3 == 0 && sub.size()>0){
            //         res.push_back(sub);
            //         sub = {};
            //     }
            //     sub.push_back(nums[i]);
            // }
    
            // for(auto sub : res){
            //     if(sub[1] - sub[0] > k || sub[2] - sub[0] > k) return {};
            // }
    
            return res;
        }
    };