#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

class Solution {
    public:
        string frequencySort(string s) {
            unordered_map<char, int> freq;
            string ans = "";
            for (char ch : s) {
                freq[ch]++;
            }
    
            //Use a max-heap priority_queue to sort by frequency
            priority_queue<pair<int, char>> pq;
            for (const auto& [ch, count] : freq) {
                pq.push({count, ch});
            }
    
            while(!pq.empty()){
                auto [cnt, value] = pq.top();
                pq.pop();
                for(int i=0; i<cnt; i++){
                    ans+=value;
                }
            }
    
            return ans;
        }
    };