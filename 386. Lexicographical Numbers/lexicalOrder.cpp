#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        void solve(vector<int>& arr, int idx , int num){
            if(idx > num)return;
            arr.push_back(idx);
    
            for(int i=0; i<=9 ; i++){
                int newInt = idx * 10 + i;
                if(newInt > num)break;
                solve(arr, newInt, num);
            }
        }
        vector<int> lexicalOrder(int n) {
            vector<int> res;
    
            for(int i=1 ; i<=9; i++){
                solve(res , i , n);
            }
    
            return res;
        }
    };