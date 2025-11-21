#include<iostream>
#include<vector>

using namespace std;

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int left = 0;
        int sz = nums.size();

        for(int right = 1; right < sz; right++){

            if(nums[left] == 0){
                while(nums[right] == 0 && right < sz-1){
                    right++;
                }
                nums[left] = nums[right];
                nums[right] = 0;
            }
            left++;
        }
    }
};