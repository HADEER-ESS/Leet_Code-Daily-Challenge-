var goodTriplets = function (nums1, nums2) {
    let ans = 0;
    let stack = []
    let len = nums1.length
    let mp_nums1 = new Map()

    for (let i = 0; i < len; i++) {
        mp_nums1.set(nums1[i], i)
    }

    for (let i = 0; i < len; i++) {
        let val = mp_nums1.get(nums2[i]);
        // let left = stack.reduce((acc, curr)=> curr < mp_nums1.get(nums2[i]) ? acc+1 : acc, 0)    => O(n)
        let left = countLessThan(stack, val)                                    // as use B.S to sort and inset     => O(log n)  
        let right = (len - val - 1) - (stack.length - left)

        ans += left * right
        insertSorted(stack, val)
    }
    return ans
};

function countLessThan(arr, val) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < val) left = mid + 1;
        else right = mid;
    }
    return left;
}

function insertSorted(arr, val) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < val) left = mid + 1;
        else right = mid;
    }
    arr.splice(left, 0, val);
}