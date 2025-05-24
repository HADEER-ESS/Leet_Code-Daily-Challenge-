#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        long long maximumValueSum(vector<int>& nums, int k, vector<vector<int>>& edges) {
            int len = nums.size();
    
            long long sum = 0;
            int cnt = 0;
    
            int minimum = 1000000001;
    
            for(int idx=0 ; idx<len ; idx++){
                int original = nums[idx];
                int toggle = nums[idx] ^ k;
    
                if(toggle > original){
                    sum += toggle;
                    cnt++;
                }
                else{
                    sum += original;
                }
    
                //get the difference
                int diff = toggle - original;
                if(diff < 0) diff *= -1;
    
                //minimize the different to use in ODD count
                //as node must be toggled in PAIR, 
                //so if odd => means there is a node will be filliped back
                minimum = min(minimum, diff);
            }
    
            if(cnt % 2 == 0) return sum;
    
            return sum - minimum;
        }
    };