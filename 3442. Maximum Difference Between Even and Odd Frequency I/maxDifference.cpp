#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int maxDifference(string s) {
            vector<int> arr(26,0);
            int maxOdd = 0;
            int minEven = 101;
    
            for(auto chr : s){
                arr[chr-'a']++;
            }
    
            for(auto num : arr){
                if(num % 2 == 0 && num > 0){
                    minEven = min(minEven, num);
                }
                else{
                    maxOdd = max(maxOdd, num);
                }
            }
    
            return maxOdd - minEven;
        }
    };