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
     * @return {number[][]}
     */
    levelOrder(root) {
        let q = new Queue();

        let res = [];

        //res.push([root.val]);

        if(root){
            q.enqueue(root);
        }

        while(!q.isEmpty()){

            let len = q.size();
            let r = [];

            while(len > 0){
                

                if(q.front().left){
                    q.enqueue(q.front().left);
                }

                if(q.front().right){
                    q.enqueue(q.front().right);
                }

                r.push(q.dequeue().val);
                len--;
            }
            res.push(r);
        }

        return res;
    }
}
