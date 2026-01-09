#include <iostream>
#include <vector>
#include <priority_queue>

using namespace std;

class Solution {
public:
    bool isPossible(vector<int>& target) {
        if(target.size() == 1)return target[0]==1;
        priority_queue<int> pq;
        long long total = 0;

        for(auto& num : target){
            pq.push(num);
            total+= num;
        }

        while(true){
            //take the MAX value each time
            long long max = pq.top();
            //dequeue
            pq.pop();
            long long remain = total - max;

            //means all value are 1
            if(max == 1 || remain == 1) return true;
            //max < remain   => means the remain can not form the MAX value
            if(remain == 0 || max < remain) return false;

            //get the old (prev) value of item
            long long mod = max % remain;
            if(mod == 0) return false;

            pq.push(mod);
            //update total
            total = remain + mod;
        }
    }
};