#include <iostream>
#include <vector>
#include <string>
#include <stringstream>

using namespace std;

class Solution {
public:
    vector<int> exclusiveTime(int n, vector<string>& logs) {
        vector<string> stk;
        vector<int> ans(n,0);
        int prevTime = 0;

        for(auto& item : logs){
            string id, type, time;
            stringstream ss(item);

            getline(ss, id, ':');
            getline(ss, type, ':');
            getline(ss, time, ':');

            if(type == "start"){
                if(stk.size()){
                    cout<< stk.back();
                    ans[stoi(stk.back())] += stoi(time) - prevTime;
                }
                stk.push_back(id);
                prevTime = stoi(time);
            }
            else{
                ans[stoi(stk.back())] += stoi(time) - prevTime + 1;
                stk.pop_back();
                prevTime = stoi(time) + 1;
            }
        }

        return ans;
    }
};