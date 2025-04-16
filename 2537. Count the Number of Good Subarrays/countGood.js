var countGood = function (nums, k) {
    let l = 0;
    let pairs = 0;
    let ans = 0;
    let mp = new Map()

    for (let r = 0; r < nums.length; r++) {
        let item = nums[r]
        let cnt = mp.get(item) || 0;

        pairs += cnt
        mp.set(item, cnt + 1)
        while (pairs >= k) {
            ans += (nums.length - r)
            let lft_val = nums[l]
            let lft_cnt = mp.get(lft_val)

            pairs -= lft_cnt - 1
            mp.set(lft_val, lft_cnt - 1)
            l++
        }

    }

    return ans;
};