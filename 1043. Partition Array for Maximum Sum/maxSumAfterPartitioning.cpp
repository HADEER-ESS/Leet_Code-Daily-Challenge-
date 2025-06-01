#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int maxSumAfterPartitioning(vector<int>& arr, int k) {
            int len = arr.size();
    
            vector<int> dp(len+1 , 0);
    
            for(int i=1 ; i<=len; i++){
                int maximum = 0;
                int maxSum = 0;
    
                for(int j=1; j<=k && i-j>=0; j++){
    
                    maximum = max(maximum, arr[i-j]);
                    maxSum = max(maxSum, dp[i-j] + maximum * j);
                }
    
                dp[i] = maxSum;
            }
    
            return dp[len];
        }
    };