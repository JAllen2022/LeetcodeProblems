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
var middleNode = function(head) {
    
    let slow=new ListNode(0,head);
    let fast= slow;

    while(fast) {
        slow = slow.next;
        if(fast.next) fast=fast.next.next
        else break
    }

    return slow;

};