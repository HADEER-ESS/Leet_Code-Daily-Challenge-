#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

class Solution {
public:
    long long countSubarrays(vector<int>& nums, int k) {
        long long res = 0;
        int maximum = *max_element(nums.begin(), nums.end());
        int l = 0;
        int sum = 0;


        for(int r=0; r<nums.size(); r++){
            nums[r] == maximum && sum++;

            while(sum >= k){
                res += (nums.size() - r);
                nums[l] == maximum && sum--;
                l++;
            }
        }
        return res;
    }
};