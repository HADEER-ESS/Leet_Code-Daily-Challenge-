#include<iostream>
#include<vector>
#include<algorithm>

using namespace std;

class Solution {
public:
    int triangleNumber(vector<int>& nums) {
        int sz = nums.size();
        int ans = 0;

        sort(nums.begin(), nums.end());

        for(int i=sz-1; i>=2; i--){
            int left = 0;
            int right = i-1;

            while(left < right){
                int sum = nums[left] + nums[right];
                
                if(sum > nums[i]){
                    ans += (right- left);
                    right--;
                }
                else{
                    left++;
                }
            }
        }

        return ans;
    }
};