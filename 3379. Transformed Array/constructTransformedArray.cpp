#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> constructTransformedArray(vector<int>& nums) {
        int sz = nums.size();
        vector<int> res(sz,0);

        for(int i=0; i<sz; i++){
            int val = nums[i];
            if(nums[i]!= 0){
                int idx = (((i+val) % sz) + sz)% sz;
                res[i] = nums[idx];
            }
        }
        return res;
    }
};