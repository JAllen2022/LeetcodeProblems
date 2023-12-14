/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
 
    function dfs (left,right){

        if(left>right) return null

        const half = Math.floor((left+right)/2)
        const node = new TreeNode(nums[half])

        node.left = dfs(left,half-1)
        node.right= dfs(half+1,right)

        return node
    }

    return dfs(0,nums.length-1)
};