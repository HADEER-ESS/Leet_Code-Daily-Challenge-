#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int row = matrix.size();
        int col = matrix[0].size();

        vector<vector<int>> zeros;

        for(int r=0 ; r<row; r++){

            for(int c = 0 ; c<col ; c++){

                if(matrix[r][c] == 0)zeros.push_back({r,c});
            }
        }

        for(auto position : zeros){
            int r = position[0];
            int c = position[1];

            for(int i=0 ; i<row; i++){
                matrix[i][c] = 0;
            }

            for(int j=0 ; j<col; j++){
                matrix[r][j] = 0;
            }
        }
    }
};