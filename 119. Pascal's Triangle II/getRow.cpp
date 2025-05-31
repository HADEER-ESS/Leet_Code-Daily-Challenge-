#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        vector<int> getRow(int rowIndex) {
            if(rowIndex == 0)return {1};
            if(rowIndex == 1) return {1,1};
            
            vector<vector<int>>dp(rowIndex+1);
    
            dp[0] = {1};
            dp[1] = {1,1};
    
            for(int i=2; i<=rowIndex; i++){
                vector<int> arr = {1};
                vector<int> last = dp[i-1];
    
                for(int j=0 ; j<last.size()-1; j++){
                    arr.push_back(last[j] + last[j+1]);
                }
                arr.push_back(1);
                dp[i] = arr;
            }
    
            return dp[rowIndex];
        }
    };