#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int sz = nums.size();

        vector<int> ans(sz*2, 0);

        for(int i=0; i<sz; i++){
            ans[i] = nums[i];
            ans[i+sz] = nums[i];
        }

        return ans;
    }
};