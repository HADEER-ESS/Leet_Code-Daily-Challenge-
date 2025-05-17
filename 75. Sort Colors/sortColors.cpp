#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {
        vector<int>mp(3,0);
        int pointer = 0;
        int start = 0;

        for(auto num : nums){
            mp[num]++;
        }

        while(start < nums.size()){
            if(mp[pointer] == 0)pointer++;
            else{
                nums[start] = pointer;
                mp[pointer]--;
                start++;
            }
        }
    }
};