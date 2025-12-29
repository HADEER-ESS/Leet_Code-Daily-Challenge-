

class MyQueue {
    constructor() {
        this.arr = []
    }
    /** 
    * @param {number} x
    * @return {void}
    */
    push(x) {
        this.arr.push(x)
    }
    /**
    * @return {number}
    */
    pop() {
        return this.arr.shift();
    }
    /**
    * @return {number}
    */
    peek() {
        if (this.arr.length) {
            return this.arr[0]
        }
        return null;
    }
    /**
    * @return {boolean}
    */
    empty() {
        return this.arr.length ? false : true
    }
}

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */