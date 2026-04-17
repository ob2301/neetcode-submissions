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
     * @return {number[]}
     */
    preorderTraversal(root) {
        let res = [];

        function pre(root){
            if(!root) return;

            res.push(root.val);
            if(root.left) pre(root.left);
            if(root.right) pre(root.right);
        }

        pre(root);

        return res;
    }
}
