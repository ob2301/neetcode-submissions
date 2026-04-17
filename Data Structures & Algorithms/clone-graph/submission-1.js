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
        //redo later DFS, ask chat how to approach BFS here as well

        let map = new Map();
        if(!node) return null;

        function clone(node){
            if(map.has(node)) return map.get(node);

            const copy = new Node(node.val);
            map.set(node, copy);

            for(const n of node.neighbors){
                copy.neighbors.push(clone(n));
            }

            return copy;
        }

        return clone(node);
    }
}
