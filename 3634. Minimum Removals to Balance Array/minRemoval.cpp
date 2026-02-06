#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int minRemoval(vector<int>& nums, int k) {
        sort(nums.begin(), nums.end());
        int start = 0;
        for(int end = 0 ; end<nums.size(); end++){
            if(nums[end] > 1LL*nums[start]*k){
                start++;
            }
        }
        return start;
    }
};