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
    goodNodes(root) {

        if(!root) return 0;

        let num = 0;

        function dfs(node, prev_max){
            if(!node) return;

            if(node.val >= prev_max){
                num++;
                prev_max = node.val;
            }

            dfs(node.left, prev_max);
            dfs(node.right, prev_max);

        }

        dfs(root, -Infinity);
        return num;
    }
}
