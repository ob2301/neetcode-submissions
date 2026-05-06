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
        let max = 0;

        function diam(r){
            if(!r) return 0;

            let left = diam(r.left);
            let right = diam(r.right);

            max = Math.max(max, left + right);

            return 1 + Math.max(left, right);
        }
        diam(root);

        return max;
    }
}
