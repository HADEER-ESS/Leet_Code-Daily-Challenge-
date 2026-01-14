#include <iostram>
#include <string>
#include <algorithm>


using namespace std;

class Solution {
public:
    string licenseKeyFormatting(string s, int k) {
        string str = "";
        string ans = "";
        int len = 0;

        for(auto chr : s){
            if(chr != '-'){
                len++;
                str+= toupper(chr);
            }
        }

        int cnt = len / k;
        int rest = len % k;


        ans += str.substr(0,rest);

        while(cnt > 0 && rest < len){
            if(ans.size()==0){ //means there is no REST character at the beginning
                ans+=str.substr(rest, k);
            }
            else{
                ans += '-' + str.substr(rest, k);
            }
            rest+=k;
            cnt--;
        }


        return ans;
    }
};