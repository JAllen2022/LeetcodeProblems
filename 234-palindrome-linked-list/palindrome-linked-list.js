/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let ret=""
    let temp= head
    while(temp){
        ret+=`${temp.val}`
        temp=temp.next
    }

    return ret === ret.split("").reverse().join("")
    
};