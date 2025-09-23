#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    int maxFreqSum(string s) {
        // SOULUTION 1

        // unordered_map<char,int> vowels;
        // unordered_map<char,int> consonant;
        // for(auto chr : s){
        //     if(chr == 'a' || chr=='o'|| chr == 'e'|| chr == 'i' || chr=='u'){
        //         vowels[chr]++;
        //     }
        //     else{
        //         consonant[chr]++;
        //     }
        // }

        // int max_vowels = 0;
        // int max_consonant = 0;

        // for(const auto& pair : vowels){
        //     max_vowels = max(max_vowels , pair.second);
        // }
        // for(const auto& pair : consonant){
        //     max_consonant = max(max_consonant , pair.second);
        // }

        // return max_consonant + max_vowels;


        // SOLUTION 2
        
        vector<int> count(26,0);
        int maxVow = 0;
        int maxCons = 0;

        for(auto chr : s){
            int idx = chr - 'a';
            count[idx]++;

            if(chr == 'a' || chr=='o'|| chr == 'e'|| chr == 'i' || chr=='u'){
                maxVow = max(maxVow , count[idx]);
            }
            else{
                maxCons = max(maxCons , count[idx]);
            }
        }

        return maxVow + maxCons;
    }
};