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

    function findMin(root){
        if(!root) return res;

        if(root.left) findMin(root.left);
        if(k > 0){
            k--;
            res = root.val;
        }
        if(k===0) return res;
        if(root.right) findMin(root.right);
        //if(k === 0) res = root.val;

        return res;
    }
    findMin(root);
    return res;
    }
}
