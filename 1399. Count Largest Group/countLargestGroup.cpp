#include <map>
#include <iostream>
using namespace std;

class Solution {
public:
    int getDigitSum(int num){
        int sum = 0;

        while(num > 0){
            sum += (num % 10);
            num /= 10;
        }
        return sum;
    }
    int countLargestGroup(int n) {
        int ans = 0;
        int maximum = 0;
        map<int,int> mp;

        for(int i=1; i<=n; i++){
            int sum = getDigitSum(i);
            mp[sum] += 1;
            maximum = max(maximum,mp[sum]);
        }

        for(auto& p : mp){
            ans += p.second == maximum;
        }
        return ans;
    }
};