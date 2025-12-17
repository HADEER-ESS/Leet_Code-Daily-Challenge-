/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let ans = []
    // let mp = new Map()
    let st = new Set()
    const len = nums.length

    // for(let i=1; i<=len; i++){              //O(n)
    //     if(!nums.includes(i)) ans.push(i)   //O(n)
    // }           //=> TOTAL   =>   O(n^2)


    for (let num of nums) {       //O(n)
        // mp.set(nums[i],1)           //O(1)
        st.add(num)                    //O(1)
    }

    for (let i = 1; i <= len; i++) {      //O(n)
        // if(!mp.has(i))ans.push(i)   //O(1)
        if (!st.has(i)) ans.push(i)      //O(1)
    }

    return ans
};