#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

class Solution {
public:
    long long countGood(vector<int>& nums, int k) {
        int l = 0;
        long long pairs = 0, ans = 0;

        unordered_map<int,int> mp;


        for(int r=0 ; r<nums.size(); r++){
            int val = nums[r];
            int cnt = mp[val] | 0;

            pairs += cnt;

            mp[val] += 1;

            while(pairs >= k){
                ans += (nums.size() - r);

                int lft_val = nums[l];
                int lft_cnt = mp[lft_val];

                pairs -= (lft_cnt -1);

                mp[lft_val] -= 1;

                l++;
            }
        }

        return ans;
    }
};