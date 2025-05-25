#include <iostream>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

class Solution {
    public:
        int longestPalindrome(vector<string>& words) {
            map<string,int> freq;
            bool hasMid = false;
            int cnt = 0;
    
            //fil the map
            for(auto word : words){
                freq[word] += 1;
            }
    
            for(auto word : words){
                string rev = word;
                reverse(rev.begin(), rev.end());
    
                if(word == rev){
                    while(freq[word] >= 2){
                        cnt+= 4;
                        freq[word] -= 2;
                    }
    
                    if(freq[word] == 1 && !hasMid){
                        cnt += 2;
                        hasMid = true;
                        freq[word]--;
                    }
                }
    
                else if(freq[word] > 0 && freq[rev] > 0){
                    cnt += 4;
                    freq[word]--;
                    freq[rev]--;
                }
            }
    
    
            return cnt;
        }
    };