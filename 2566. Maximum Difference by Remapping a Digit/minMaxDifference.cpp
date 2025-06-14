#include <iostream>

using namespace std;

class Solution {
    public:
        int minMaxDifference(int num) {
            string small = "0";
            string large = "";
            char target;
            string str = to_string(num);
    
    
            //to get the SMALLEST number => that start with 0
            for(int i=1 ; i<str.size(); i++){
                if(str[i] == str[0]){
                    small += "0";
                }
                else{
                    small += str[i];
                }
            }
    
    
            //to get the LARGEST number => it must start with 9
            for(int i=0 ; i<str.size(); i++){
                if(str[i] == '9'){
                    large += "9";
                }
                else if(target && str[i] == target){
                    large += "9";
                }
                else if(!target){
                    target = str[i];
                    large += "9";
                }
                else{
                    large += str[i];
                }
            }
    
            return stoi(large) - stoi(small);
        }
    };