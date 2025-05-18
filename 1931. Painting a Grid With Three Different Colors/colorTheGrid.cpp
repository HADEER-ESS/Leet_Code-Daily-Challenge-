#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    const vector<int> COLOR = {0,1,2};
    const long long MOD = 1000000007;
// to check if adjacent rows are acceptable vertically
    bool checkRows(vector<int> row1, vector<int> row2){     //O(n)
        for(int i=0 ; i<row1.size(); i++){
            if(row1[i] == row2[i]) return false;
        }
        return true;
    }

    void backtrack(int col, vector<int>& arr, vector<vector<int>>& ans) {
        if (arr.size() == col) {
            ans.push_back(arr);
            return;
        }

        for (int color : COLOR) {
            if (arr.empty() || arr.back() != color) {
                // do
                arr.push_back(color);

                // recurse
                backtrack(col, arr, ans);

                // undo
                arr.pop_back();
            }
        }
    }

    vector<vector<int>> genarateRow(int col){   //O(4^m)
        vector<vector<int>> ans;
        vector<int> arr;
        backtrack(col, arr, ans);
        return ans;
    }


    int colorTheGrid(int m, int n) {
        vector<vector<int>> validRows = genarateRow(m);
        int len = validRows.size();
        int total = 0;

        vector<vector<int>> compatible(len,vector<int>{});  //O(n^2)

        for(int i=0 ; i<len; i++){
            for(int j=0 ; j<len; j++){

                if(checkRows(validRows[i] , validRows[j])){
                    compatible[i].push_back(j);
                }
            }
        }

        vector<int> dp(len,1);

        for(int col = 1 ; col<n; col++){        //O((M+N)∗4^M)

            vector<int> newdp(len,0);

            for(int curr=0 ; curr<len; curr++){

                for(auto prev : compatible[curr]){
                    newdp[curr] = (newdp[curr] + dp[prev]) % MOD;
                }
            }
            dp = newdp;
        }
        for (auto val : dp) {
            total = (total + val) % MOD;
        }
        return total;     
    };
};


