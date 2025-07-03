#include <iostream>

using namespace std;

class Solution {
    public:
        char kthCharacter(int k) {
            string word = "a";
    
            while(word.size() < k){
                string curr = "";
                for(auto chr : word){
                    curr += chr+1;
                }
                word+=curr;
            }
    
            return word[k-1];
        }
    };