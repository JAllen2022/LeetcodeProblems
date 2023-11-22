/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    let slow = head
    let fast = head.next

    while(fast.next) {
        slow=slow.next;
        fast=fast.next.next
        
    }

    let temp = slow.next
    slow.next=null;
    let secondHalf;
    let prev=null;

    while(temp){
        if(!temp.next) secondHalf=temp
        let tempTemp = temp.next;
        temp.next=prev
        prev=temp
        temp = tempTemp
    }

    let firstHalf = head
    let max = -Infinity

    while(firstHalf) {

        max = Math.max(firstHalf.val+secondHalf.val,max)
        firstHalf=firstHalf.next;
        secondHalf=secondHalf.next;

    }
    
    return max
    
};


//   let arr = []

//     while(head){
//         arr.push(head.val)
//         head=head.next
//     }
//     let max=0
//     for(let left = 0, right=arr.length-1; left <right;left++,right--){
//         max= Math.max(arr[left] + arr[right], max) 
//     }

//     return max