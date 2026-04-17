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
     * @return {boolean}
     */
    isValidBST(root) {

        function search(root, left, right){
            if(!root) return true;

            if(!(root.val > left && root.val < right)) return false;

            return (search(root.left, left, root.val) && search(root.right, root.val, right));
        }

        return search(root, -Infinity, Infinity);
    }
}
