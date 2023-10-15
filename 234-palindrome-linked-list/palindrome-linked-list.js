// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
// var isPalindrome = function(head) {

//     let ret=""
//     let temp= head
//     while(temp){
//         ret+=`${temp.val}`
//         temp=temp.next
//     }

//     return ret === ret.split("").reverse().join("")
    
// };


// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true; // An empty list or a list with a single node is a palindrome by definition.
    }

    // Find the middle of the linked list using the slow and fast pointer technique.
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list.
    let prev = null;
    let current = slow;
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Compare the reversed second half with the first half.
    let firstHalf = head;
    let secondHalf = prev;
    while (secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false; // If values don't match, it's not a palindrome.
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true; // If all values matched, it's a palindrome.
};
