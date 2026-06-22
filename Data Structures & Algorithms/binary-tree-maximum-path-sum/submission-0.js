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
     * @return {number}
     */
    maxPathSum(root) {
        let res = root.val;
        dfs(root);

        function dfs(root){
            if(root ===null) return 0;
            //include both
            let leftMax = Math.max(dfs(root.left), 0);
            let rightMax = Math.max(dfs(root.right), 0);

            res = Math.max(res, root.val + leftMax + rightMax);
            //include path

            return root.val + Math.max(leftMax, rightMax);
        }

        return res;
    }   
}
