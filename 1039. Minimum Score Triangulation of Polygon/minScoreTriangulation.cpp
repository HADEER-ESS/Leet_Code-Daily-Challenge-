#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution {
public:
    int minScoreTriangulation(vector<int>& values) {
        int len = values.size();
        vector<vector<int>> dp(len, vector<int>(len,0));


        //start with Smallest Triangle Shap
        for(int sz=3; sz<=len; sz++){

            //To AVOID j exceed the Array LEN
            for(int i=0 ; i+sz-1 < len; i++){

                int j = i + sz - 1;
                
                dp[i][j] = INT_MAX;

                for(int k=i+1; k<j; k++){

                    int num = dp[i][k] + dp[k][j] + (values[i] * values[k] * values[j]);
                    dp[i][j] = min(num, dp[i][j]);
                }
            }
        }
        return dp[0][len-1];
    }
};