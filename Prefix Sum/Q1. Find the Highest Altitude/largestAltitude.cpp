using namespace std
#include <iostream>
#include <vector>
#include <algorithm>


class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        const int sz = gain.size();
        vector<int> arr(sz+1,0);

        for(int i=0; i<sz; i++){
            arr[i+1] = arr[i] + gain[i];
        }
        int ans = arr[0];

        for(int i=1; i<sz+1; i++){
            // if(max < arr[i])max = arr[i];
            ans = max(ans, arr[i]);
        }
        return ans;
    }
};
