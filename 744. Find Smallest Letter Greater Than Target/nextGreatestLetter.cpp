#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        //non-decreasing => increasing => small -> high
        int left = 0;
        int right = letters.size()-1;
        char ans = letters[0];

        while(left <= right){
            int mid = (left+right) / 2;
            if(letters[mid] > target){
                ans = letters[mid];
                right = mid -1;
                
            }
            else{
                left = mid + 1;
            }
        }
        cout << "ans " << ans<< endl;
        return ans;
    }
};