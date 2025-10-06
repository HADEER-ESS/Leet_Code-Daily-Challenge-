class Solution {
    public int minPatches(int[] nums, int n) {
        long miss = 1;
        int patch = 0;

        int start = 0;

        while(miss <= n){
            if(start < nums.length && nums[start] <= miss){
                miss += nums[start];
                start++;
            }
            else{
                patch++;        //Dispatch new number to COVER range
                miss += miss; //update the cover range
            }
        }


        return patch;
    }
}