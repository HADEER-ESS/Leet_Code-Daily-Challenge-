#include <iostream>
#include <vector>
#include <map>

using namespace std;

class Solution {
    public:
        int closestMeetingNode(vector<int>& edges, int node1, int node2) {
            map<int,int> mp1;
            map<int,int> mp2;
            int cnt = 0;
            int len = edges.size();
            int res = -1;
            int maximum = 100001;
    
    
            while(node1 != -1 && mp1.count(node1) == 0){
                mp1[node1] = cnt;
                cnt++;
                node1 = edges[node1];
            }
    
            cnt = 0;
    
            while(node2 != -1 && mp2.count(node2) == 0){
                mp2[node2] = cnt;
                cnt++;
                node2 = edges[node2];
            }
    
    
            for(int i=0 ; i<len ; i++){
                if(mp1.count(i) == 0 || mp2.count(i) == 0) continue;
                int temp_max = max(mp1[i] , mp2[i]);
                if(temp_max < maximum){
                    maximum = temp_max;
                    res = i;
                }
            }
    
            return res;
        }
    };