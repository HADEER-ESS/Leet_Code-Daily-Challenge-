class Solution {
public:
    double powerHelper(double base, long power){
        if(power == 0) return 1;
        double half = powerHelper(base , power/2);
        double res = half * half;
        if(power % 2 == 1) res *= base;

        return res;
    }
    double myPow(double x, int n) {
        long N = n;

        if(n < 0){
            x = 1/x;
            N = N * -1;
        }

        return powerHelper(x,N);
    }
};