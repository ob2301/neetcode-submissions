/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * }
 */
class Solution {
    /**
     * @param {Node} p
     * @param {Node} q
     * @return {Node}
     */
    lowestCommonAncestor(p, q) {
        let seen = new Set();
        while(q){
            seen.add(q);
            q = q.parent;
        }

        while(p){
            if(seen.has(p)) return p;
            seen.add(p);
            p = p.parent;
        }

        return -1;
    }
}
