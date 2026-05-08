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
    diameterOfBinaryTree(root) {
        //redo
        let max = 0;

        function dfs(head){
            if(!head) return 0;

            let left = dfs(head.left);
            let right = dfs(head.right);

            max = Math.max(max, left + right);

            return 1 + Math.max(left, right);

        }
        dfs(root);
        return max;
    }
}
