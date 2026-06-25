class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        let adj = {};

        let i = n - 1;
        while(i >= 0){
            adj[i] = [];
            i--;
        }

        for(const [a, b] of edges){
            adj[a].push(b);
            adj[b].push(a);
        }

        //check for cycle
        //check for all node connected

        let seen = new Set();

        function dfs(root, par){
            if(seen.has(root)) return false;

            seen.add(root);
            
            for(const nei of adj[root]){
                if(nei === par) continue;
                if(!dfs(nei, root)) return false;
            }

            return true;
        }

        if(!dfs(0, null)) return false;

        return seen.size === n;
    }
}
