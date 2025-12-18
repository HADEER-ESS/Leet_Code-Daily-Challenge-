#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<string> buildArray(vector<int>& target, int n) {
        int iterate = target[target.size()-1];
        vector<string> ans;

        for(int i=1; i<=iterate; i++){
            int occ = count(target.begin(), target.end(), i);
            if(occ > 0){
                ans.push_back("Push");
            }else{
                ans.push_back("Push");
                ans.push_back("Pop");
            }
        }

        return ans;
    }
};