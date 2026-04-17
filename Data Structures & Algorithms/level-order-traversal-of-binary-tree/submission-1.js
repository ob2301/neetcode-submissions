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
        let list = [];

        if(!root) return list;

        let list_q = new Queue();
        list_q.push(root);

        //let i = 0;

        while(!list_q.isEmpty()){
            let cur = [];
            let curr = list_q.size();
            for(let i = 0; i < curr; i++){
                let x = list_q.dequeue();
                if(x){
                    cur.push(x.val);
                }
                if(x && x.left){
                    //cur.push(x.left.val)
                    list_q.push(x.left);
                }
                if(x && x.right){
                    //cur.push(x.right.val)
                    list_q.push(x.right);
                }
            }
            if(cur.length !== 0) list.push(cur);
            //list.push(cur);
        }
        return list;
    }
}
