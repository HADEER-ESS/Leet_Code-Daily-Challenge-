#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int lengthAfterTransformations(string s, int t) {
            //count each character appearance
            vector<long long> chars(26,0);
            long long MOD = 1000000007;
            long long ans = 0;
    
            for(auto item : s){
                chars[item-97]++;
            }
    
            //loop "t" times
            for(int i=0; i<t; i++){
                //count the update for every alphabit change will loop 't' time
                vector<long long> visit(26,0);
    
                //loop through 26 charactes
                for(int ch=0; ch<26; ch++){
                    //if we reach "z" so... 
                    // => increment "a" count
                    // => increment "b" count 
                    //by "z" origin  (updated) count
                    if(ch == 25){
                        //for "a"
                        visit[0] = (visit[0] + chars[25]) % MOD;
                        //for "b"
                        visit[1] = (visit[1] + chars[25]) % MOD;
                    }
                    else{
                        //increment the transformed (new) character count by the previous charcate count in (chars) array
                        visit[ch+1] = (visit[ch+1] + chars[ch]) % MOD;
                    }
                }
    
                //update the chars vector data
                chars = visit;
            }
    
    
            //sum all together
            for(auto num : chars){
                ans += num;
            }
            return ans % MOD;
        }
    };