#include <iostream>
#include <vector>
#include <queue>

using namespace std;

class Solution {
    public:
        int maxCandies(vector<int>& status, vector<int>& candies, vector<vector<int>>& keys, vector<vector<int>>& containedBoxes, vector<int>& initialBoxes) {
            int ans = 0;
            queue<int>queue;
            int len = status.size();
            vector<bool>visit(len, false);
            vector<bool>hasKey(len, false);
            vector<bool>hasBox(len , false);
    
            for(auto box : initialBoxes){
                hasBox[box] = true;
    
                if(status[box]){
                    queue.push(box);
                    visit[box] = true;
                }
            }
    
            while(queue.size()){
                int curr = queue.front();
                ans += candies[curr];
                queue.pop();
    
                //check if CURR box CONTAINS keys
                for(auto key : keys[curr]){
                    if(!hasKey[key]){
                        hasKey[key] = true;
    
                        if(hasBox[key] && !visit[key]){
                            queue.push(key);
                            visit[key] = true;
                        }
                    }
                }
    
                //check if Curr box contains another BOX
                //those another BOX must have 1\ status === 1 OR
                // 2\ have its KEY.
                for(auto box : containedBoxes[curr]){
                    if(!hasBox[box]){
                        hasBox[box] = true;
                    }
                    if(status[box] || hasKey[box]){
                        if(!visit[box]){
                            queue.push(box);
                            visit[box] = true;
                        }
                    }
                }
            }
    
            return ans;
        }
    };