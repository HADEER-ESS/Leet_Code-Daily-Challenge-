#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        bool dfs(int pos, vector<int>& visit, vector<vector<int>>& grph){
            //base case
            if(visit[pos] == 2)return true;
    
            visit[pos] = 1;
    
            for(auto item : grph[pos]){
                if(visit[item] == 1 || !dfs(item, visit, grph)){
                    return false;
                }
            }
    
            visit[pos] = 2;
    
            return true;
        }
        vector<int> eventualSafeNodes(vector<vector<int>>& graph) {
            int sz = graph.size();
            vector<int> visit(sz, 0);
            vector<int> ans;
    
    
            for(int i=0 ; i<sz; i++){
                if(dfs(i,visit, graph))ans.push_back(i);
            }
    
            return ans;
    
        }
    };