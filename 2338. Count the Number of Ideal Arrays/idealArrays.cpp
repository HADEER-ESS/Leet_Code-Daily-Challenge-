#include <map>
#include <iostream>
using namespace std;

//=>Dynamic Programming SOLUTION
//=> Solve 35 out of 47

class Solution {
public:
    map<string,int> mp;
    int MOD = 1000000007;
    int solve(int max,int n,int idx, int last){
        string key = to_string(idx) + '-' + to_string(last);
        if(mp[key])return mp[key];

        if(idx == n)return 1;
        int total = 0;
        for(int next=last; next<=max; next+=last){
            total = (total + solve(max,n,idx+1, next)) % MOD;
        }
        mp[key] = total;
        return total;
    }
    int idealArrays(int n, int maxValue) {
        
        return solve(maxValue, n,0,1);
    }
};