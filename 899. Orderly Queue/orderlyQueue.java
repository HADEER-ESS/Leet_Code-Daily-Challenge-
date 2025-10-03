class Solution {
    public String orderlyQueue(String s, int k) {
        
        if(k == 1){
            //store
            String best = s;
            //check every possible SWITCH
            for(int i=0 ; i<s.length(); i++){
                String rev = s.substring(i) + s.substring(0,i);
                //compare
                if(rev.compareTo(best) < 0) best = rev;
            }
            return best;
        }else{
            //convert string to array of char
            char[] strs = s.toCharArray();
            //sort
            Arrays.sort(strs);
            //join
            return new String(strs);
        }
    }
}