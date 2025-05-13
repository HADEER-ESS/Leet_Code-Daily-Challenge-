//SOlution #1
// with O(n^2) Time complexity 
// Pass 433 / 792
var countBalancedPermutations = function(num) {
    let results = new Set()
    const MOD = 1000000007;
    let ans = 0;

    let digits = num.split("")
    let len = digits.length
    let visit = new Array(len).fill(false)

    

    function solve(arr){
        //base case where I check if the
        //number match requirements
        if(arr.length === len){
            let str = arr.join('')
            if(!results.has(str)){
                results.add(str)
                ans += checkMatch(str)
            }
            return;
        }

        for(let i=0 ; i<len ;i++){
            if(visit[i] )continue
            
            //do
            visit[i] = true
            arr.push(digits[i])

            //recursion
            solve(arr)

            //undo
            arr.pop()
            visit[i] = false
        }
        
    }

    solve([])

    return ans % MOD;
};

//this function to calc if the sum of odd index number === the sum of even index number
function checkMatch(arr){
    let odd = 0
    let even = 0

    for(let i=0 ; i<arr.length; i++){
        if(i%2 === 0){
            even += parseInt(arr[i])
        }
        else{
            odd += parseInt(arr[i])
        }
    }

    return odd === even;

}