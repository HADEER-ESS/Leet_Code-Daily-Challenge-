#include <iostream>
#include <algorithm>

using namespace std;

class Solution {
public:
    int numWaterBottles(int numBottles, int numExchange) {
        int ans = numBottles;

        while(numBottles >= numExchange){
            ans += floor(numBottles / numExchange);
            numBottles = floor(numBottles / numExchange) + (numBottles % numExchange);
        }


        return ans;
    }
};