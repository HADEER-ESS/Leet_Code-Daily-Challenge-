#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>

using namespace std;

class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int sz = nums.size();
        vector<int> ans;

        // unordered_map<int,int> mp;
        unordered_set<int> st;

        for(auto num : nums){
            // mp.insert({num, 1});
            st.insert(num);
        }

        for(int i=1; i<=sz; i++){
            // if(mp[i]==0)ans.push_back(i);
            if(!st.count(i))ans.push_back(i);
        }

        return ans;
    }
};