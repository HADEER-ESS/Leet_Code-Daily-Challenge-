#include <iostream>
#include <vector>
#include <utility>       // for std::pair
#include <queue>         // for std::priority_queue
#include <functional>    // for std::greater

using namespace std;

class Solution {
    public:
        vector<int> getFinalState(vector<int>& nums, int k, int multiplier) {
            priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    
            for(int i=0 ; i<nums.size(); i++){
                pq.push({nums[i] , i});
            }
    
            while(k > 0){
                auto [value, idx] = pq.top();
                pq.pop();
                nums[idx] *= multiplier;
                pq.push({nums[idx] , idx});
                k--;
            }
    
            return nums;
        }
    };