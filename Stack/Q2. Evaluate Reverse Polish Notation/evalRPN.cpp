#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        vector<int> stk;

        for(auto& oper : tokens){
            if(oper != "*" && oper != "/" && oper != "+" && oper != "-"){
                stk.push_back(stoi(oper));
            }
            else{
                int sec = stk.back();
                stk.pop_back();
                int first = stk.back();
                stk.pop_back();
                int value = 0;

                if(oper == "+")value = first + sec;
                else if(oper == "-")value = first - sec;
                else if(oper == "*")value = first * sec;
                else value = first / sec;
                stk.push_back(value);
            }
        }

        return stk[0];
    }
};