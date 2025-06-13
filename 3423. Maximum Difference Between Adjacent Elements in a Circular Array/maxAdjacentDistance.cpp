#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

class Solution {
    public:
        int maxAdjacentDistance(vector<int>& nums) {
            int ans = 0;
            int len = nums.size();
    
            for(int i=1; i<len+2; i++){
                ans = max(ans, abs(nums[i%len] - nums[(i-1)%len]));
            }
    
            return ans;
        }
    };