using namespace std;
#include <iostream>
#include <vector>

class Solution {
public:
    int numberOfArrays(vector<int>& differences, int lower, int upper) {
        int max = lower;
        int left = 0 ; //Pointer
        
        int ans = lower;
        int start = lower;

        //get the started array
        while(left < differences.size()){
            int sum = ans + differences[left];
            if(sum > upper)return 0;
            if(sum >= lower && sum <= upper){
                ans = sum;
                left++;
                if(sum > max){
                    max = sum;
                }
            }
            else{
                left = 0;
                start++;
                ans = start;
                max = start;
            }
        }
        return (upper - max) + 1;
    }
};