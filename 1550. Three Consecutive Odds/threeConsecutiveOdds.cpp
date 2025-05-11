#include <iostream>
#include <vector>
using namespace std;


class Solution {
    public:
        bool threeConsecutiveOdds(vector<int>& arr) {
            int cnt = 0;
    
            for(auto num : arr){
                //base case
                if(cnt == 3)return true;
                if(num % 2 == 0){
                    cnt = 0;
                }
                else{
                    cnt++;
                }
            }
    
            return cnt == 3;
        }
    };