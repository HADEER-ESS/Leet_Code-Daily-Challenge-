class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        int ans = 0;
        int min =101;
        //create vector where count the distinct numbers
        bitset<101> bit;
        
        for(auto num : nums){
            //get min number to handle impossible condition
            if(num < min){
                min = num;
            }
        }
        //handle impossible case
        if(min < k) return -1;

        // count the distnict number appearcne in "ans"
        for(auto num : nums){
            if(num > k && !bit[num]){
                ans++;
                bit[num] = true;
            }
        }
        return ans;
    }
};