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
        let res = [];

        if(!root) return [];

        queue.enqueue(root);

        while(!queue.isEmpty()){

            let len = queue.size();
            let first = true;
            while(len > 0){
                let node = queue.dequeue();
                if(first) res.push(node.val);
                first = false;

                if(node.right) queue.enqueue(node.right);
                if(node.left) queue.enqueue(node.left);

                len--;
            }
        }
        return res;
    }
}
