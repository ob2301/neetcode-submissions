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
        
        function main(m){
            if(!m) return false;

            if(dfs(m, subRoot)) return true;

            return main(m.left) || main(m.right);
        }

        function dfs(head, sub){
            if(!head && !sub) return true;

            if(!head || !sub) return false;

            if(!(head.val === sub.val)) return false;

            return dfs(head.left, sub.left) && dfs(head.right, sub.right);
        }

        return main(root);
    }
}
