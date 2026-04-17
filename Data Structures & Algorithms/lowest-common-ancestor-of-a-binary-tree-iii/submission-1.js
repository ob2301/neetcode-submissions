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
        let alreadyseen = new Set();

        while(q){
            alreadyseen.add(q);
            q = q.parent;
        }

        while(p){
            if(alreadyseen.has(p)) return p;
            alreadyseen.add(p);
            p = p.parent;
        }

        return null;
    }
}
