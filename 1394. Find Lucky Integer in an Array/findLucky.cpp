#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int findLucky(vector<int>& arr) {
    unordered_map<int, int> mp;
    
    // Count occurrences of each number
    for (int num : arr) {
        mp[num]++;
    }
    
    int res = -1;
    
    // Find the lucky integer
    for (const auto& pair : mp) {
        if (pair.first == pair.second) {
            res = max(res, pair.first);
        }
    }
    
    return res;
}