class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let adj = new Map();

        for(let i = 1; i <= edges.length; i++){
            adj.set(i, []);
        }

        for(const [src, end] of edges){
            adj.get(src).push(end);
            adj.get(end).push(src);

            let seen = new Set();

            if(dfs(src, seen, -1)) return [src, end];
        }

        function dfs(start, seen, parent){
            if(seen.has(start)) return true;

            seen.add(start);

            for(const nei of adj.get(start)){
                if(nei === parent) continue;
                if(dfs(nei, seen, start)) return true;
            }

            return false;
        }
        return [];
    }
}
