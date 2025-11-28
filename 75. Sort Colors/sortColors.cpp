#include <vector>
#include<algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {
        int left=0;
        int idx = 0;

        int right = nums.size() - 1;


        while(idx <= right){
            if(nums[idx] == 0){
                //SWIP WITH LEFT
                swap(nums[left], nums[idx]);
                left++;
                idx++;
            }
            else if(nums[idx] == 2){
                //SWIP WITH RIGHT
                swap(nums[right] , nums[idx]);
                right--;
            }
            else{
                idx++;
            }
        }
    }
};