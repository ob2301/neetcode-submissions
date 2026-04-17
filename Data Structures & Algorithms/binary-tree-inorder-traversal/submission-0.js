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
    // res = [];
    inorderTraversal(root) {
        if(!root) return [];
        //let res = [];
        return [...this.inorderTraversal(root.left), 
        root.val, 
        ...this.inorderTraversal(root.right)];
    }
}
