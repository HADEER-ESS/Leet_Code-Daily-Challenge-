#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int minimumDifference(vector<int>& nums, int k) {
        if(k == 1)return 0;
        sort(nums.begin(), nums.end(), greater<int>());
        int ans = 100001;

        int j = k-1;

        for(int i=0; j<nums.size(); i++,j++){
            ans = min(ans, nums[i]-nums[j]);
        }

        return ans;
    }
};