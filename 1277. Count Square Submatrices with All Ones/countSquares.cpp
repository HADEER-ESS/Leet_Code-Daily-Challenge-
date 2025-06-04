#include <iostream>
#include <vector>
#include <bits/stdc++.h>

using namespace std;

class Solution {
    public:
        int countSquares(vector<vector<int>>& matrix) {
            int row = matrix.size();
            int col = matrix[0].size();
    
            int res = 0;
    
            for(int r=0 ; r<row; r++){
    
                for(int c=0 ; c<col; c++){
    
                    if(!matrix[r][c])continue;
                    if(r>0 && c>0){
                        matrix[r][c] = min(
                            {matrix[r-1][c],
                            matrix[r][c-1],
                            matrix[r-1][c-1]}
                        ) + 1;
                    }
    
                    res += matrix[r][c];
                }
            }
    
            return res;
        }
    };