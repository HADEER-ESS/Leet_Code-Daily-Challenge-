#include <vector>
#include <iostream>
#include <climits>
#include <algorithm>

using namespace std;

class Solution {
    public:
        vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
            vector<vector<int>> res;
            int diff = INT_MAX;
            sort(arr.begin(), arr.end());
    
            for(int i=1 ; i<arr.size(); i++){
                diff = min(diff, abs(arr[i] - arr[i-1]));
            }
    
            for(int i=1; i<arr.size(); i++){
                if(abs(arr[i] - arr[i-1]) == diff){
                    res.push_back({arr[i-1] , arr[i]});
                }
            }
    
            return res;
        }
    };