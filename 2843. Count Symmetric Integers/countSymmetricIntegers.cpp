using namespace std;
#include <iostream>

class Solution {
public:
    int countSymmetricIntegers(int low, int high) {
        int cnt = 0;

        for(int num=low; num<=high; num++){
            string str = to_string(num);
            int len = str.size();
            if(len % 2 == 1) continue;
            int mid = len / 2;
            int startSum = 0;
            int endSum = 0;
            for(int i=0 ; i<mid; i++){
                startSum += str[i] - '0';
                endSum += str[i+mid] - '0';
            }
            if(startSum == endSum)cnt++;
        }

        return cnt;
    }
};