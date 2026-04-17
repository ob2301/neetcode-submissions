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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */

    isSameTree(p, q) {

        let arr_p = [], arr_q = [], arr_q_pre = [], arr_p_pre = [];

    function inOrder(root){
        if(!root){
            arr_p_pre.push("null");
            arr_p.push("null");
            return;
        }

        arr_p_pre.push(root.val);
        inOrder(root.left);
        arr_p.push(root.val);
        inOrder(root.right);
    }

    function inOrder2(root){
        if(!root){
            arr_q_pre.push("null");
            arr_q.push("null");
            return;
        }

        arr_q_pre.push(root.val);

        inOrder2(root.left);

        arr_q.push(root.val);

        inOrder2(root.right);
    }

    inOrder(p);
    inOrder2(q);
    console.log(arr_p);
    console.log(arr_q);

    for(let i = 0; i < arr_p.length; i++){
        if(arr_p[i] !== arr_q[i]) return false;
        if(arr_p_pre[i] !== arr_q_pre[i]) return false;
    }

    return arr_p.length === arr_q.length && arr_p_pre.length === arr_q_pre.length;
    }
}
