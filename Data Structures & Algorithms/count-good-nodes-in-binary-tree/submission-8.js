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
        let res = 0;

        function dfs(node, max){
            if(!node) return;

            let mmax = max;

            if(node.val >= max){
                mmax = node.val;
                res++;
            }

            if(node.left) dfs(node.left, mmax);
            if(node.right) dfs(node.right, mmax);
        }

        dfs(root, -Infinity);
        return res;
    }
}
