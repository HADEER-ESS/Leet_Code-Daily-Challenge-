#include <iostream>

using namespace std;

class Solution {
public:
    void solve(int n, int idx, int &res){
        if(n == 0){
            res++;
            return;
        }
        for(int i=idx; i<5 ; i++){
            solve(n-1, i, res);
        }
    }
    int countVowelStrings(int n) {
        int res = 0;

        solve(n,0,res);

        return res;
    }
};