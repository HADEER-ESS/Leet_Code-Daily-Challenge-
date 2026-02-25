#include <iostream>
#include <vector>
#include <map>
#include <bitset>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> sortByBits(vector<int>& arr) {
        vector<int> ans;
        map<int, vector<int>> mp;

        for(int num : arr){
            string binary = bitset<32>(num).to_string();
            int cnt = count(binary.begin(), binary.end(),'1');
            if(!mp.contains(cnt))mp.insert({cnt, {}});
            mp[cnt].push_back(num);
        }

        for(auto& pair : mp){
            vector<int>& vec = pair.second;
            sort(vec.begin(), vec.end());
            ans.insert(ans.end(),vec.begin(), vec.end());
        }

        return ans;
    }
};