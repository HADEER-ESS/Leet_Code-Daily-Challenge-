using namespace std;
#include <iostream>


class Solution {
public:
    int countPairs(vector<int>& nums, int k) {
        int sz = nums.size();
        int ans = 0;

        for(int i=0; i<sz-1; i++){

            for(int j= sz-1; j>i; j--){

                if(nums[i] == nums[j] && i*j % k  == 0){
                    ans++;
                }
            }
        }
        return ans;
    }
};