#include <iostream>
#include <vector>
#include <stack>

using namespace std;

class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temp) {
        int sz = temp.size();
        vector<int> ans(sz, 0);

        //Monotonic Tools
        stack<int> stk;
        int pt = sz-1;

        while(pt > -1){
            if(stk.empty()){
                stk.push(pt);
                pt--;
            }
            else{
                if(temp[stk.top()] > temp[pt]){
                    ans[pt] = stk.top() - pt;
                    stk.push(pt);
                    pt--;
                }
                else{
                    stk.pop();
                }
            }
        }

        return ans;
    }
};