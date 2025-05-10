#include <iostream>
#include <vector>
using namespace std;


class Solution {
    public:
        long long minSum(vector<int>& nums1, vector<int>& nums2) {
            long long sum1 = 0;
            int zeros1 = 0;
            long long sum2 = 0;
            int zeros2 = 0;
    
            for(auto num : nums1){
                if(num == 0){
                    sum1 += 1; 
                    zeros1++;
                }
                else{
                    sum1 += num;
                }
            }
    
            for(auto num : nums2){
                if(num == 0){
                    sum2 += 1; 
                    zeros2++;
                }
                else{
                    sum2 += num;
                }
            }
            long long maximum = max(sum1, sum2);
    
            if((sum1 == maximum || zeros1 > 0) &&
                (sum2 == maximum || zeros2 > 0))return maximum;
            return -1;
            
        }
    };