#include <unordered_set>
#include <unordered_map>
#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    int countCompleteSubarrays(vector<int>& nums) {
        int ans=0;
        int l=0;
        int sz = unordered_set<int>(nums.begin(), nums.end()).size();
        unordered_map<int,int>mp;

        for(int r=0; r<nums.size(); r++){
            mp[nums[r]]+=1;

            while(mp.size() == sz){
                ans += (nums.size() - r);
                mp[nums[l]] -= 1;
                if(mp[nums[l]] == 0)mp.erase(nums[l]);
                l++;
            }
        }

        return ans;
    }
};