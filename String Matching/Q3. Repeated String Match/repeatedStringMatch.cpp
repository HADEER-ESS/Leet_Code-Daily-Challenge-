#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int repeatedStringMatch(string a, string b) {
        string str = a;
        int cnt = 1;

        while(str.size() < b.size()){
            str += a;
            cnt+=1;
        }
        if(str.contains(b))return cnt;
        str+=a;
        return str.contains(b) ? cnt+1 : -1;
    }
};