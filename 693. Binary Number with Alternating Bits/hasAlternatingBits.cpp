#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    bool hasAlternatingBits(int n) {
        string binary = bitset<32>(n).to_string();
        int first = binary.find('1');
        
        for(int i=first+1; i<binary.size(); i++){
            if(binary[i] == binary[i-1])return false;
        }

        return true;
    }
};