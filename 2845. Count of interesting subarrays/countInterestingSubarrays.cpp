#include <vector>
#include <unordered_map>
#include <iostream>
using namespace std;


class Solution {
public:
    long long countInterestingSubarrays(vector<int>& nums, int modulo, int k) {
        long long ans=0;
        int prefixSum = 0;
        unordered_map<int,int>mp;
        mp[0]=1;

        for(auto num : nums){
            //get the prefix for current number
            int add = num % modulo == k? 1 : 0;
            prefixSum += add;

            //calculate the diff between the "sum" and curr
            int calc = (prefixSum - k + modulo) % modulo;
            ans += mp[calc];

            mp[prefixSum % modulo]++;
        }


        return ans;
    }
};