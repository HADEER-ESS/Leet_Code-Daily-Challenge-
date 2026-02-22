#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    int binaryGap(int n) {
        int ans =0;
        string binary = bitset<32>(n).to_string();
        int first = binary.find('1');
        int idx = first+1;

        while(idx < binary.size()){
            if(binary[idx] == '0') idx++;
            else{
                ans = max(ans, idx-first);
                first = idx;
                idx++;
            }
        }

        return ans;
    }
};