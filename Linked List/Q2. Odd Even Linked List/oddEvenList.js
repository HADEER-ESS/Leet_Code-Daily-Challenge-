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
var oddEvenList = function (head) {
    let evenList = new ListNode(0)
    let oddList = new ListNode(0)
    let even = evenList
    let odd = oddList
    let list = head
    let start = 0

    while (list) {
        if (start % 2 !== 0) {//odd
            odd.next = list
            odd = odd.next
        }
        else {   //even
            even.next = list
            even = even.next
        }
        start++
        list = list.next
    }
    //truncate ODD list
    odd.next = null

    //LINK: even -> odd
    even.next = oddList.next //to skip the first 0

    return evenList.next
};