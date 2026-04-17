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
    if(!root) return;
    let res = [];

    function dfs(root){
        if(!root) return;

         dfs(root.left);
        res.push(root.val);
         dfs(root.right);
    }
    dfs(root);
    return res[k-1];
    }
}
