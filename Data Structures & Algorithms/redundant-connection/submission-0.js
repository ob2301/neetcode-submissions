class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        let seen = new Set(), map = new Map();

        for(let i = 1; i < edges.length + 1; i++){
            map.set(i, []);
        }

        function dfs(node, parent, visited){
            if(visited.has(node)) return true;

            visited.add(node);
            for(const nei of map.get(node)){
                if(nei === parent) continue;
                if(dfs(nei, node, visited)) return true;
            }
            return false;
        }

        for(const [a, b] of edges){
            map.get(a).push(b);
            map.get(b).push(a);
            let visited = new Set();

            if(dfs(a, -1, visited)) return [a, b];
        }

        return [];
    }
}
