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

        function sameTree(node, sub){
            if(!node && !sub) return true;

            if(!node || !sub) return false;

            if(node.val !== sub.val) return false;

            return sameTree(node.left, sub.left) && sameTree(node.right, sub.right);
        }

        return dfs(root);
    }
}
