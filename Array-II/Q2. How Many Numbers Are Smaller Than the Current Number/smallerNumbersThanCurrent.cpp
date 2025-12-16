#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
        //vector<int> ans;
        vector<int> ans(nums.size(), 0);

        for(int i=0; i<nums.size(); i++){
            int cnt = 0;
            for(int j=0 ; j<nums.size(); j++){
                if(j != i && nums[j] < nums[i]){
                    cnt++;
                }
            }
            // ans.push_back(cnt);
            ans[i] += cnt;
        }
        return ans;
    }
};