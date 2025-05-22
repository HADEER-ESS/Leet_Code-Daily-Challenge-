#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
    public:
        int deleteGreatestValue(vector<vector<int>>& grid) {
            int ans = 0;
    
            for(auto& row : grid){
                sort(row.begin(), row.end());
            }
    
            while(grid[0].size() > 0){
                int maximum = 0;
    
                for(auto& row : grid){
                    maximum = max(maximum, row.back());
                    row.pop_back();
                }
                ans += maximum;
            }
    
            return ans;
        }
    };