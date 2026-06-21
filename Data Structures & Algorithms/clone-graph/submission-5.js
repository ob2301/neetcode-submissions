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
        let adj = new Map();
        if(!node) return null;

        function dfs(root){
            if(adj.has(root)) return adj.get(root);

            const copy = new Node(root.val);
            adj.set(root, copy);

            for(const neighbor of root.neighbors){
                copy.neighbors.push(dfs(neighbor));
            }

            return copy;
        }
        
        return dfs(node);
    }
}
