using namespace std;
#include <iostream>

class Solution {
public:
    int countGoodTriplets(vector<int>& arr, int a, int b, int c) {
        int ans = 0;
        int sz = arr.size();

        for(int i=0 ; i<sz-2; i++){

            for(int j=i+1; j<sz-1; j++){

                if(abs(arr[i] - arr[j]) > a) continue;

                for(int k=j+1; k<sz; k++){

                    if(abs(arr[j] - arr[k]) <= b && abs(arr[i] - arr[k]) <= c){
                        ans++;
                    }
                }
            }
        }

        return ans;
    }
};