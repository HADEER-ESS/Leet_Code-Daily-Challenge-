#include <vector>
#include <priority_queue>

using namespace std;

class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        //TYPE = [int(sum), int(i), int(j)] => vector<int>
        priority_queue<vector<int>, vector<vector<int>>, greater<vector<int>>>min;
        vector<vector<int>> res;

        for(int i=0; i<nums1.size(); i++){
            min.push({nums1[i]+nums2[0] , i , 0});
        }

        while(!min.empty()){
            vector<int> item = min.top();
            int i = item[1];
            int j = item[2];
            res.push_back({nums1[i], nums2[j]});
            min.pop();
            if(res.size() == k) return res;

            if(j+1 < nums2.size()){
                min.push({nums1[i]+ nums2[j+1] , i , j+1});
            }
        }

        return res;
        
    }
};