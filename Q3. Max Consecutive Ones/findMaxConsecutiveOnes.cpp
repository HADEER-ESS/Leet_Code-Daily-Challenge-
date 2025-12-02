#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int ans = 0;
        int maxNum = 0;

        for(auto num : nums){
            if(num != 1){
                maxNum = max(maxNum, ans);
                ans = num;
            }
            ans += num;
        }
        maxNum = max(ans, maxNum);

        return maxNum;
    }
};