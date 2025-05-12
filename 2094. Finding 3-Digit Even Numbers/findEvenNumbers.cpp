#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;


class Solution {
    public:
        vector<int> findEvenNumbers(vector<int>& digits) {
            vector<int> ans;
            vector<int> cnt(10,0);
            int max = 0;
    
            sort(digits.begin(), digits.end(), greater<>());
            for(int i=0 ; i<3; i++){
                max += digits[i];
                if(i<2) max *= 10;
            }
    
            for(auto num : digits){
                cnt[num]++;
            }
    
            for(int i=100; i<=max; i+=2){
                int three = i / 100;
                int two = (i / 10) % 10;
                int one = i % 10;
                bool success = true;
    
                if(--cnt[three] < 0)success = false;
                if(--cnt[two] < 0)success = false;
                if(--cnt[one] < 0)success = false;
    
                if(success)ans.push_back(i);
    
                cnt[three]++;
                cnt[two]++;
                cnt[one]++;
            }
            return ans;
        }
    };