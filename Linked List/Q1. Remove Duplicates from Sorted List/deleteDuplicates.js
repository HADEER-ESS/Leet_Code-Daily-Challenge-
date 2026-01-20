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
var deleteDuplicates = function (head) {
    let list = head

    while (list) {
        if (list.next && list.val === list.next.val) {
            list.next = list.next.next
        }
        else {
            list = list.next
        }
    }
    return head
};