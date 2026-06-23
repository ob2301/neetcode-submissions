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
     * @return {number}
     */
    maxPathSum(root) {
        let res = root.val;

        dfs(root);

        function dfs(node){
            if(!node) return 0;

            let leftMax = Math.max(dfs(node.left), 0);
            let rightMax = Math.max(dfs(node.right), 0);
            res = Math.max(node.val + leftMax + rightMax, res);

            return node.val + Math.max(leftMax, rightMax);
        }

        return res;
    }   
}
