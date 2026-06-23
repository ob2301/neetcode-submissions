/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {

        function dfs(node){
            if(!node) return 0;

            let leftMax = dfs(node.left)
            let rightMax = dfs(node.right);

            if(leftMax === -1 || rightMax === -1) return -1;

            if(Math.abs(leftMax - rightMax) > 1) return -1;

            return 1 + Math.max(rightMax, leftMax);
        }
        
        if(dfs(root) < 0) return false
        return true;
    }
}
