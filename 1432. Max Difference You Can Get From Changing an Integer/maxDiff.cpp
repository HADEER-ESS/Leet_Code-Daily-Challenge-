#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
    public:
    
        string replaceAll(string& str , char from, char to){
            for(auto &chr : str){
                if(chr == from) chr = to;
            }
            return str;
        }
    
        int maxDiff(int num) {
            string large = to_string(num);
            string small = to_string(num);
    
            //create SMALL number
            if(small[0] == '1'){
                for(int i=1 ; i<small.size(); i++){
                    if(small[i] != '0' && small[i] != '1'){
                        replaceAll(small, small[i] , '0');
                        break;
                    }
                }
            }
            else{
                replaceAll(small, small[0], '1');
            }
    
    
            //create LARGE number
            for(auto chr : large){
                if(chr != '9'){
                   replaceAll(large, chr , '9');
                   break;
                }
            }
            return stoi(large) - stoi(small);
        }
    };