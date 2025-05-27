#include <iostream>
#include <vector>

using namespace std;

class Solution {
    public:
        int differenceOfSums(int n, int m) {
            int num1 = 0;   //divisable by m
            int num2 = 0;   //not divisable by m
            for(int i=1 ; i<=n ;i++){
                if(i % m == 0){
                    num1+= i;
                }
                else{
                    num2+= i;
                }
            }
    
            return num2 - num1;
        }
    };