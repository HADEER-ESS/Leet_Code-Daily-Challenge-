class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int x = 0;

        for(String oper : operations){
            if(oper.equals("++X") || oper.equals("X++")){
                x++;
            }
            else{
                x--;
            }
        }

        return x;
    }
}