class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        let map = new Map(), count = 0, visited = new Set();

        for(let i = 0; i < n; i++){
            map.set(i, []);
        }

        for(const [l, r] of edges){
            map.get(l).push(r);
            map.get(r).push(l);
        }

        function dfs(node){
            if(visited.has(node)) return;

            visited.add(node);

            for(const nei of map.get(node)){
                dfs(nei);
            }
            return true;
        }

        for(let i = 0; i < n; i++){
            if(!visited.has(i)){
                dfs(i);
                count++;
            }
        }

        return count;
    }
}
