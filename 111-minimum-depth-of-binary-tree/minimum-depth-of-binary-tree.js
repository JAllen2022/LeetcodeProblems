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
 * @return {number}
 */
var minDepth = function(root) {

    if(!root) return 0
    root.level=1
    const queue = [root]

    while(queue.length){

        let node = queue.shift();
        if(!node.left && !node.right) return node.level

        if(node.left){

            node.left.level = node.level + 1
            queue.push(node.left)
        }

        if(node.right){
            node.right.level = node.level + 1
            queue.push(node.right)
        }

    }
    
};