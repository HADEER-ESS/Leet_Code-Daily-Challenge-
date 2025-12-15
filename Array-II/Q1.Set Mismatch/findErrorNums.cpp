#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> findErrorNums(vector<int>& nums) {
        int sz = nums.size();
        sort(nums.begin(), nums.end());
        vector<int> ans;

        for(int i=0; i<sz-1; i++){
            if(nums[i] == nums[i+1]){
                ans.push_back(nums[i]);
                break;
            }
        }
        for(int i=1 ; i<=sz; i++){
            auto it = find(nums.begin(), nums.end() , i);
            if(it == nums.end()){
                ans.push_back(i);
                break;
            }
        }

        
        return ans;
    }
};


/*
[3,2,2] => SORT
[2,2,3]
*/

/*
[3,2,3,4,6,5] => SORT
[2,3,3,4,5,6]
*/