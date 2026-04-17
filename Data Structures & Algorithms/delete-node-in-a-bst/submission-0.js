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
     * @param {number} key
     * @return {TreeNode}
     */
    findMin(root){
        let copy = root;
        while(copy.left){
            copy = copy.left;
        }
        return copy.val;
    }

    deleteNode(root, key) {
        if(!root) return root;
        
        if(root.val < key){
            root.right = this.deleteNode(root.right, key);
        }

        else if(root.val > key){
            root.left = this.deleteNode(root.left, key);
        }

        else{
            if(!(root.left)) return root.right;
            if(!root.right) return root.left;

            let rootval = this.findMin(root.right);
             root.val = rootval;
            root.right = this.deleteNode(root.right, rootval );
        }
        return root;
    }
}
