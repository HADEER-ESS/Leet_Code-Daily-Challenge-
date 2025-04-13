class Solution {
public:
    long long getPower(long base, long long power, long long mod){
        if(power == 0) return 1;

        long long half = getPower(base, power/2 , mod);
        long long res = (half * half) % mod;
        if(power % 2 == 1) res = (res * base) % mod;

        return res;
    };
    int countGoodNumbers(long long n) {
        long long mod = 1000000007;
        long long even = (n + 1) / 2;
        long long odd = n / 2;

        long long evenPart = getPower(5, even, mod);
        long long oddPart = getPower(4, odd, mod);

        return (evenPart * oddPart) % mod;
    }
};