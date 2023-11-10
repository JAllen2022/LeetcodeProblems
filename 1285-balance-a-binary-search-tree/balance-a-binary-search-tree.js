/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {

    // In order Traversal -> put all values in a list. Split it in half, create BST that way
    const arr = []

    function inorderTraversal(node) {
        if(!node) return
        if(node.left) inorderTraversal(node.left)
        arr.push(node.val)
        if(node.right) inorderTraversal(node.right)
    }

    inorderTraversal(root)

    const mid= Math.floor(arr.length/2)
    const newRoot = new TreeNode(arr[mid])
    
    insertNodeBST(mid+1,arr.length-1, arr,newRoot)
    insertNodeBST(0,mid-1, arr,newRoot)

    return newRoot;
};

function insertNodeBST (left,right,arr, root) {
   if(left>right || !root) return

   const mid = Math.floor((left+right)/2)
   const val = arr[mid]
   const tempNode = new TreeNode(val)
   if(root.val<val) root.right= tempNode
   if(root.val>val) root.left= tempNode

   insertNodeBST(mid+1,right,arr,tempNode)
   insertNodeBST(left,mid-1,arr,tempNode)

}