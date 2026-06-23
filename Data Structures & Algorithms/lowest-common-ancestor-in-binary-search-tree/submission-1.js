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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        
        function dfs(root){
            if(!root) return null;

            if(root.val > p.val && root.val > q.val){
                return dfs(root.left);
            }

            if(root.val < p.val && root.val < q.val){
                return dfs(root.right);
            }

            return root;
        }

        return dfs(root);
    }
}
