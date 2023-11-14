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
    if(!head || !head.next) return head

    let temp=head.next;

    let current= head;
    let duplicate = false;
    let prev
    
    const returnNode = new ListNode(0)
    let rNode=returnNode

    while(temp) {   
        
        if(temp.val===current.val){
            duplicate = true
        } else {
            if(duplicate) {
                current = temp
            } else {
                rNode.next= current
                rNode=current
                current=temp;
            }
            duplicate=false
        }

        temp=temp.next;
    }

    if(!duplicate && current.val!==rNode.val) {
        rNode.next=current
        rNode=current
    }
    rNode.next=null

    return returnNode.next
    
};