#include <iostream>
#include <vector>
#include <priority_queue>

using namespace std;

class Solution {
public:
    int lastStoneWeight(vector<int>& stones) {
        priority_queue<int> pq; //already be sorted
        for(auto& stone : stones){
            pq.push(stone);
        }

        while(pq.size()>1){
            int first = pq.top();
            pq.pop();
            int sec = pq.top();
            pq.pop();

            if(first != sec){
                pq.push(first-sec);
            }
        }
        if(pq.size() == 0) return 0;
        return pq.top();

        //Solution with O(n^2 log n)
        // if(stones.size() == 1) return stones[0];
        // sort(stones.begin(), stones.end());
        // reverse(stones.begin(), stones.end());

        // while(stones.size()> 1){
        //     if(stones[0] == 0 || stones[1] == 0) return stones[0];

        //     int minNum = min(stones[0], stones[1]);
        //     stones[0] -= minNum;
        //     stones[1] -= minNum;
        //     sort(stones.begin(), stones.end());
        //     reverse(stones.begin(), stones.end());
        //     stones.pop_back();
        // }

        // return stones[0];
    }
};