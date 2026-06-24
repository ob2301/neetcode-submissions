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
        //left = 2n + 1, right = 2n + 2
        
        let queue = new Queue();

        queue.enqueue(root);
        if(!root) return [];

        let res = [];

        while(!queue.isEmpty()){
            let arr = [];
            let len = queue.size();
            
            while(len > 0){
                if(queue.front().left) queue.enqueue(queue.front().left);
                if(queue.front().right) queue.enqueue(queue.front().right);
                arr.push(queue.dequeue().val);
                len--;
            }
            res.push(arr);
        }
        return res;
    }
}
