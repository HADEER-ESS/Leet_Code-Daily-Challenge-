/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
    const result = [];
    const heap = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });

    for (let i = 0; i < nums1.length; i++) {
        //              sum             , i , j
        heap.enqueue([nums1[i] + nums2[0], i, 0]);
    }
    while (!heap.isEmpty()) {
        const [sum, i, j] = heap.dequeue();
        result.push([nums1[i], nums2[j]]);

        if (result.length === k) return result

        if (j + 1 < nums2.length) {
            heap.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }

    return result;
};