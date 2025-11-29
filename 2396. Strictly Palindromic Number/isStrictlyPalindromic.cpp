#include <iostream>
#include <string>
#include <bitset>

using namespace std;

class Solution {
public:
    bool checkPalindrom(string str){
        int left = 0;
        int right = str.size() -1;

        while(left < right){
            if(str[left] != str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    bool isStrictlyPalindromic(int n) {
        //between 2 -> n-2
        for(int i=2; i<=n-2; i++){
            //if not palindrom => return false
            string conv = bitset<64>(n).to_string();
            if(!checkPalindrom(conv)) return false;
        }
        return true;
    }
};