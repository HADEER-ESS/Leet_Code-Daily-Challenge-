#include <iostream>
#include <string>
#include <regex>


using namespace std;

class Solution {
public:
    string maskPII(string s) {
        string ans = "";

        regex pattern("^[0-9+() -]+$");
        bool res = regex_match(s,pattern);

        if(res){//if give string is a PHONE number
            string phone = "";
            for(int i=0; i<s.size(); i++){
                if(s[i]-'0' >= 0 && s[i]-'0' <= 9){
                    phone += s[i];
                }
            }
            int sz = phone.size();

            if(sz == 10){
                ans = "***-***-" + phone.substr(sz-4);
            }
            else if(sz == 11){
                ans = "+*-***-***-" + phone.substr(sz-4);
            }
            else if(sz == 12){
                ans = "+**-***-***-" + phone.substr(sz-4);
            }
            else{
                ans = "+***-***-***-" + phone.substr(sz-4);
            }

        }
        else{
            ans += tolower(s[0]);
            ans += "*****";
            int idx = s.find("@");
            ans += tolower(s[idx-1]);   //tolower   =>  works only with characters
            for(int i=idx; i<s.size(); i++){
                ans += tolower(s[i]);
            }
        }

        return ans;
    }
};