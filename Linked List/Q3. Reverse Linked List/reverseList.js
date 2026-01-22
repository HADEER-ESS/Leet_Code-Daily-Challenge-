/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let arr = []
    let list = head
    let rev = new ListNode(0)
    let ptr = rev //pointer for REVERSE LIST iteration

    while (list) {
        arr.push(list.val)
        list = list.next
    }

    while (arr.length) {
        ptr.next = new ListNode(arr.pop())
        ptr = ptr.next
    }
    return rev.next
};