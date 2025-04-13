class Solution {
public:
    int mySqrt(int x) {
        long long ans = 0;
        long long start = 1;
        long long end = x;

        while(start <= end){
            long long mid = (start + end) / 2;
            //case to update
            if(mid * mid <= x && (mid+1)*(mid+1) > x){
                ans = mid;
                break;
            }
            //case for end move
            else if(mid * mid > x){
                end = mid - 1;
            }
            //case for start move
            else{
                start = mid + 1;
            }
        }

        return ans;
    }
};