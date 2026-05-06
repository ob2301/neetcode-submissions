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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        
        function dfs(a, b){
            if(!a && !b) return true;
            if(!a || !b) return false;
            if(a.val !== b.val) return false;

            return dfs(a.left, b.left) && dfs(a.right, b.right);
        }

        function dfs2(root){
            if(!root) return false;
            
            if(dfs(root, subRoot)) return true;

            return dfs2(root.left) || dfs2(root.right);

        }

        return dfs2(root);
    }
}
