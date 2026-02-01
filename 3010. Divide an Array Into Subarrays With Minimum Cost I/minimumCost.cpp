#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minimumCost(vector<int>& nums) {
        vector<int> sub(nums.begin()+1, nums.end());
        sort(sub.begin(), sub.end());       

        return nums[0]+sub[0]+sub[1];
    }
};