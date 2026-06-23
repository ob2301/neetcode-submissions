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
        
        function dfs(node){
            if(!node) return false;

            if(sameTree(node, subRoot)) return true;
            return dfs(node.left) || dfs(node.right);
        }

        function sameTree(n, s){
            if(!n && !s) return true;
            if(!n || !s) return false;
            if(n.val != s.val) return false;
            return sameTree(n.left, s.left) && sameTree(n.right, s.right);
        }

        if(!subRoot) return false;
        return dfs(root);
    }
}
