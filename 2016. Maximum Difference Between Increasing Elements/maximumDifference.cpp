#include <vector>
#include <iostream>

using namespace std;

class Solution {
    public:
        int maximumDifference(vector<int>& nums) {
            int minNum = nums[0];
            int res = -1;
    
            for(int i=1 ; i<nums.size(); i++){
                if(nums[i] > minNum){
                    res = max(res, nums[i]-minNum);
                }
                minNum = min(minNum, nums[i]);
            }
    
            return res;
        }
    };