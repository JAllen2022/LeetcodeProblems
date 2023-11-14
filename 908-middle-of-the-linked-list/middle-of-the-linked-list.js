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
    
    let temp=new ListNode(0,head);
    let tempNext= temp;

    while(tempNext) {
        temp = temp.next;
        if(tempNext.next) tempNext=tempNext.next.next
        else break
    }

    return temp;

};