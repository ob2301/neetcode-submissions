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
        let queue = new Queue();

        queue.enqueue(root);
        let res = [];
        if(!root) return res;

        while(!queue.isEmpty()){

            let len = queue.size();
            let first = true;
            while(len > 0){
                let n = queue.dequeue();
                if(first){
                    res.push(n.val);
                    first = false;
                }
                if(n.right) queue.enqueue(n.right);
                if(n.left) queue.enqueue(n.left);
                

                len--;
            }
        }

        return res;
    }
}
