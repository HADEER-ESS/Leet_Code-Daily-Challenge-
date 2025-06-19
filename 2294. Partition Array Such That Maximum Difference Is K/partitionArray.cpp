#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
    public:
        int partitionArray(vector<int>& nums, int k) {
            sort(nums.begin(), nums.end());
            int min = nums[0];
            int cnt = 1;
    
            for(int i=1; i<nums.size(); i++){
                if(nums[i] - min <= k){
                    continue;
                }
                cnt++;
                min = nums[i];
            }
            return cnt;
        }
    };