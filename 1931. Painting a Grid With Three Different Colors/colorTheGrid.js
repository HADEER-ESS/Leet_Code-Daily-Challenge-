/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//  m => r => for ROW
//  n => c => for COLUMN
// 0 => red
// 1 => green
// 2 => blue
const COLORS = [0,1,2]
var colorTheGrid = function(m, n) {
    const MOD = 1000000007;
    //filling the grid column-by-column
    let validRows = genarateRow(m)
    let len = validRows.length
    
    const transitions = Array(len).fill().map(() => []);
    
    //build matrix to check if it is vertically match
    for(let i=0 ; i<len; i++){
        for(let j=0; j<len; j++){
            let isValid = CheckRows(validRows[i], validRows[j])
            if(isValid){
                transitions[i].push(j)
            }
        }
    }

    let dp = new Array(len).fill(1)

    for(let col = 1 ; col<n ; col++){
        let newdp = new Array(len).fill(0)

        for(let curr=0 ; curr<len; curr++){

            for(let valid of transitions[curr]){
                newdp[curr] = (newdp[curr] + dp[valid]) % MOD
            }
        }
        dp = newdp
    }

    // Total number of colorings
    return dp.reduce((acc, val) => (acc + val) % MOD, 0);
};
// function to genarate each row by know (m) value
function genarateRow(col){
    let ans = []
    function backTrack(arr){
        if(arr.length === col){
            ans.push([...arr])
            return;
        }

        for(let color of COLORS){
            if(arr.length ===0 || arr[arr.length-1] !== color){
                //do
                arr.push(color)

                //recursion
                backTrack(arr)

                //undo
                arr.pop()
            }
        }
    }

    backTrack([])

    return ans;
}


//function check adaject cells color for rows
function CheckRows(row1, row2){
    for(let i=0 ; i<row1.length; i++){
        if(row1[i] === row2[i]) return false
    }
    return true;
}