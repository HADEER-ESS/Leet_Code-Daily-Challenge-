#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int minCostClimbingStairs(vector<int>& cost) {
            int len = cost.size();
            vector<int> dp(len+1, 0);
    
            //Base Cases
            dp[0] = 0;
            dp[1] = cost[0];    // it starts in step 0
    
            for(int i=2 ; i<=len; i++){
                dp[i] = min(dp[i-1] , dp[i-2]) + cost[i-1];  //climing 1 or 2 steps
            }
    
            return min(dp[len-1] , dp[len]);
        }
    };