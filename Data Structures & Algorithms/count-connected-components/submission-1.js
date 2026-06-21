class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let adj = {};

        for(let i = 0; i < n; i++) adj[i] = [];

        for(const [a, b] of edges){
            adj[a].push(b);
            adj[b].push(a);
        }

        let seen = new Set();
        let count = 0;

        function dfs(node){
            if(seen.has(node)) return;
            seen.add(node);
            
            for(const neighbor of adj[node]){
                dfs(neighbor);
            }
        }

        for(let i = 0; i < n; i++){
            if(!seen.has(i)){
                dfs(i);
                count++;
            }
        }
        return count;
    }
}
