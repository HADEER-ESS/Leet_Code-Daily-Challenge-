#include <iostream>
#include <vector>

using namespace std; 

class Solution {
public:
    bool isZeroArray(vector<int>& nums, vector<vector<int>>& queries) {
        int cnt = 0;
        int len = nums.size();
        vector<int> diff(len+1 , 0);

        //calc the differences of the substitute will be for every index
        //the index that out of scoop withh be PLUSED as it won't be minus at curr step *confition*
        for(auto query : queries){
            int start = query[0];
            int end = query[1];
            diff[start]--;
            if(end+1 < len){
                diff[end+1]++;
            }
        }

        //create a prefix-sum to sum the possible differences
        int prefixSum = 0;

        for(int i=0 ; i<len; i++){
            prefixSum += diff[i];
            nums[i] += prefixSum;
            if(nums[i] <= 0)cnt++;
        }
        
        return cnt == len;
    }
};