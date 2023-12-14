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
var deleteDuplicates = function(head) {

    if(!head) return head

    let temp = head;
    let prev = head;

    while(temp) {

        if(temp.val!==prev.val) {
            prev.next=temp
            prev=temp
        }

        temp=temp.next
    }

    prev.next=null

    return head
    
};