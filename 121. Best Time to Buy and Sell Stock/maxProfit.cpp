#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int maxProfit(vector<int>& prices) {
            int len = prices.size();
            int min_price = prices[0];
            vector<int> dp(len , 0);
    
            for(int i=1 ; i<len; i++){
                min_price = min(min_price, prices[i]);
                dp[i] = max(dp[i-1] , prices[i] - min_price);
            }
    
            return dp[len-1];
        }
    };