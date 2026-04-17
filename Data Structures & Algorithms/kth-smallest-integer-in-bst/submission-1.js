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
     * @param {number} k
     * @return {number}
     */

    kthSmallest(root, k) {
    //DO LATER
    if(!root) return root;
    let res = 0;

    function inorder(root){
        if(!root) return root;
        inorder(root.left);
        k-=1;
        if(k === 0) res = root.val;
        inorder(root.right);
    }
    inorder(root);
    return res;
}
}
