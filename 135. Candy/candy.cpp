#include <iostream>
#include <vector> 

using namespace std;

class Solution {
    public:
        int candy(vector<int>& ratings) {
            int len = ratings.size();
            int ans = 0;
            vector<int> arr(len,1);
    
            //from left to right
            for(int i=1 ; i<len; i++){
                if(ratings[i] > ratings[i-1]){
                    arr[i] = arr[i-1] + 1;
                }
            }
    
            //from right to left
            for(int i=len-2 ; i>=0; i--){
                if(ratings[i] > ratings[i+1] && arr[i+1] >= arr[i]){
                    arr[i] = arr[i+1] + 1;
                }
            }
    
            for(auto num : arr){
                ans+= num;
            }
    
            return ans;
        }
    };