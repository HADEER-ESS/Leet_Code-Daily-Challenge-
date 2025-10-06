#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int minPatches(vector<int>& nums, int n) {
        long long miss = 1;
        int patch = 0;

        int start = 0; //for looping

        while(miss <= n){
            if(start< nums.size() && nums[start] <= miss){
                //update miss => the range of number can be covered
                miss += nums[start];
                //increment INDEX of array
                start++;
            }
            else{
                //patch number
                patch++;
                //update miss by increment COVER range by this patched new value
                miss += miss;
            }
        }

        return patch;
    }
};