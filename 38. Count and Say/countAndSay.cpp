#include <iostream>
using namespace std;

class Solution {
public:
    string getNewSTring(string str){
        int cnt = 1;
        char chr = str[0];
        string res = "";

        for(int j=1; j<str.size(); j++){
            if(chr == str[j]){
                cnt++;
            }
            else{
                res += (to_string(cnt)+chr);
                chr = str[j];
                cnt = 1;
            }
        }
        res += (to_string(cnt)+chr);
        return res;
    }
    string countAndSay(int n) {
        string res = "1";
        for(int i=2; i<=n; i++){
            res = getNewSTring(res);
        }
        return res;
    }
};