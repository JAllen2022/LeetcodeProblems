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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return false
    let total = 0;

    function dfs (node,total) {
        if(!node.left && !node.right) {
            total+=node.val
            if(total===targetSum) return true
            return
        }
        let left,right;
        if(node.left) left = dfs(node.left, total+node.val)
        if(node.right) right=dfs(node.right, total+node.val)

        return left || right
    }

    return dfs(root,0) ? true : false
    
};