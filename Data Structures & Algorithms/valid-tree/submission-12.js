class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //dfs, check for cycle

        let adj = {};

        for(let i = 0; i < n; i++){
            adj[i] = [];
        }

        for(const [a, b] of edges){
            adj[a].push(b);
            adj[b].push(a);
        }

        let seen = new Set();
        function dfs(node, par){
            if(seen.has(node)) return false;
            seen.add(node);

            for(const edge of adj[node]){
                if(edge === par) continue;
                if(!dfs(edge, node)) return false;
            }

            return true;
        }

        
        if(!dfs(0)) return false;
        if(seen.size != n) return false;
        return true;
    }
}
