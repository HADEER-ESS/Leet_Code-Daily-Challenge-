#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    vector<int> mins = {1, 2, 4, 8, 16, 32};
    vector<int> hrs = {1, 2, 4, 8};
    void createTime(vector<string>& ans, int total, int idx, int hr, int min){
        if(hr > 11 || min > 59)return;
        if(total == 0){
            string form = min < 10 ? "0"+to_string(min) : to_string(min);
            ans.push_back(to_string(hr)+":"+form);
        }

        for(int i=idx; i<10; i++){
            int currHr = hr;
            int currMin = min;

            if(i < 4){
                currHr += hrs[i];
            }
            else{
                currMin += mins[i-4];
            }
            createTime(ans, total-1, i+1, currHr, currMin);
        }
    }
public:
    vector<string> readBinaryWatch(int turnedOn) {
        vector<string> ans;

        createTime(ans, turnedOn, 0, 0, 0);

        return ans;
    }
};