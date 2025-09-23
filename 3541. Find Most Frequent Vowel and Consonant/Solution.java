public class Solution {
    public int maxFreqSum(String s) {
        int[] count = new int[26];
        int maxVow = 0;
        int maxCons = 0;

        for(char chr : s.toCharArray()){
            int idx = chr - 'a';
            count[idx]++;
            if(chr == 'a' || chr=='o'|| chr == 'e'|| chr == 'i' || chr=='u'){
                maxVow = Math.max(maxVow , count[idx]);
            }
            else{
                maxCons = Math.max(maxCons , count[idx]);
            }
        }

        return maxVow + maxCons;
    }
}
