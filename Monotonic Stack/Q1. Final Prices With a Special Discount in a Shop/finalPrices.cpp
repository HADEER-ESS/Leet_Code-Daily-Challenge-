#include <iostream>
#include <vector>
#include <stack>

using namespace std;

class Solution {
public:
    vector<int> finalPrices(vector<int>& prices) {
        //Nested Loop in O(n^2)
        // for(int i=0; i<prices.size()-1; i++){

        //     for(int j=i+1; j<prices.size(); j++){
        //         if(prices[j] <= prices[i]){
        //             prices[i] -= prices[j];
        //             break;
        //         }
        //     }
        // }

        // return prices;

        //Monotonic stack in O(n)
        int sz = prices.size();
        vector<int> ans(sz);

        stack<int> stk;
        int start = sz-1;

        while(start >= 0){
            if(stk.empty()){
                stk.push(prices[start]); //Push index
                ans[start] = prices[start];
                start--;
            }
            else{
                //check if the Last item (j) is Smaller than current (i)
                // j > i => for that we start from END of array
                // prices[j] <= prices[i]
                if(stk.top() <= prices[start]){
                    //Apply discount
                    ans[start] = prices[start] - stk.top();
                    stk.push(prices[start]);
                    start--;
                }
                else{
                    stk.pop();
                }
            }
        }
        return ans;
    }
};