#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int finalValueAfterOperations(vector<string>& operations) {
        int x = 0;

        for(auto oper : operations){
            if(oper == "++X" || oper == "X++"){
                x++;
            }
            else{
                x--;
            }
        }

        return x;
    }
};