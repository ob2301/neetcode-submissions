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
        let q = new Queue();
        if(!root) return [];

        q.enqueue(root);
        let res = [];

        while(!q.isEmpty()){

            let x = q.size();
            let first = true;

            while(x > 0){
                let node = q.dequeue();
                

                if(first){
                    res.push(node.val);
                    first = false;
                }


                if(node.right) q.enqueue(node.right);
                if(node.left) q.enqueue(node.left);
                x--;
            }
        }

        return res;
    }
}
