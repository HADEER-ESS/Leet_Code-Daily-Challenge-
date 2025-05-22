/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
class MinComp {
    constructor(value, pos) {
        this.value = value;
        this.pos = pos;
    }
}
class MinHeap {
    constructor() {
        this.arr = [];
    }

    enqueue(value, idx) {
        let element = new MinComp(value, idx);
        let add = false
        for (let i = 0; i < this.arr.length; i++) {
            if (
                this.arr[i].value > value ||
                (this.arr[i].value === value && this.arr[i].pos > idx)
            ) {
                this.arr.splice(i, 0, element)
                add = true;
                break;
            }
        }
        if (!add) {
            this.arr.push(element)
        }
    }

    dequeue() {
        if (this.isEmpty()) return;
        return this.arr.shift();
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}


var getFinalState = function (nums, k, multiplier) {
    let heap = new MinHeap()

    for (let i = 0; i < nums.length; i++) {
        heap.enqueue(nums[i], i)
    }

    while (k > 0) {
        let { value, pos } = heap.dequeue()
        nums[pos] *= multiplier
        heap.enqueue(nums[pos], pos)
        k--
    }

    return nums
};


//SOLUTION #1
// SIMULATION PRIORITY QUEUE
/*
var getFinalState = function(nums, k, multiplier) {
    let pq = []

    // Add elements with priority
    for(let i = 0; i < nums.length; i++){
        pq.push([nums[i] , i])
    }

    pq.sort((a,b)=>a[0]-b[0])

    while(k > 0){
        let [val, idx] = pq.shift();
        nums[idx] *= multiplier;
        pq.push([nums[idx] , idx])
        pq.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; // tie-breaker: lower index first
        }
        return a[0] - b[0]; // sort by value
        });
        k--;
    }

    return nums;
};
*/