#include <iostream>
using namespace std;
#include <vector>

class Solution {
public:
    long long countPairs(vector<int>& nums,int target){
        long long cnt = 0;
        int left = 0;
        int right = nums.size()-1;

        while(left < right){
            int sum = nums[left] + nums[right];

            if(sum > target){
                right--;
            }
            else{
                cnt += (right-left);
                left++;
            }
        }
        return cnt;
    }
    long long countFairPairs(vector<int>& nums, int lower, int upper) {
        sort(nums.begin(),nums.end());

        return countPairs(nums, upper) - countPairs(nums, lower-1);
    }
};