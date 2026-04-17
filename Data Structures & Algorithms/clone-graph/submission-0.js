/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        let oldToNew = new Map();
        if(!node) return null;

        function dfs(node){
            if(oldToNew.has(node)) return oldToNew.get(node);

            const copy = new Node(node.val);
            oldToNew.set(node, copy);

            for(const neighbor of node.neighbors){
                copy.neighbors.push(dfs(neighbor));
            }
            return copy;
        }
        return dfs(node);
    }
}
