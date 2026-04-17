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
    rightSideView(root) {
        let res = [];

        if(!root) return res;

        let q = new Queue();
        q.push(root);

        while(!q.isEmpty()){
            let cur_size = q.size();

            for(let i = 0; i < cur_size; i++){
                let x = q.dequeue();
                if(x && i === cur_size - 1){
                    res.push(x.val);
                }
                if(x.left) q.push(x.left);
                if(x.right){
                    q.push(x.right);
                }
                
            }
        }
        return res;
    }
}
