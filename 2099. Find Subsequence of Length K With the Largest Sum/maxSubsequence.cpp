#include <vector>
#include <algorithm>

using namespace std;

class Solution {
    public:
        vector<int> maxSubsequence(vector<int>& nums, int k) {
            vector<pair<int,int>> pairs;
            vector<pair<int,int>> sorted;
            int sz = nums.size();
            vector<int> res;
    
            for(int i=0 ; i<sz; i++){
                pairs.push_back({nums[i] , i});
            }
    
            sort(pairs.begin(), pairs.end());
    
            for(int i= sz-k; i<sz; i++){
                sorted.push_back(pairs[i]);
            }
    
            sort(sorted.begin(), sorted.end(), [](const pair<int,int>& a, const pair<int,int>& b){
                return a.second < b.second;
            });
    
            for(const auto& s : sorted){
                res.push_back(s.first);
            }
    
            return res;
        }
    };