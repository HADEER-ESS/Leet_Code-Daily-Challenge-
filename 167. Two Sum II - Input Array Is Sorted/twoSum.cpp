#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int left =0;
        int right = nums.size()-1;

        while(left < right){
            int currSum = nums[left] + nums[right];

            if(currSum == target){
                return {left+1 , right+1};
            }
            else if(currSum < target){
                left++;
            }
            else{
                right--;
            }
        }
        return {-1,-1};
    }
};