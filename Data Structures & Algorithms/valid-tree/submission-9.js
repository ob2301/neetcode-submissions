class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //dfs, check for cycle

        let tree = new Map();

        for(let i = 0; i < n; i++){
            tree.set(i, []);
        }

        for(const [l, r] of edges){
            tree.get(l).push(r);
            tree.get(r).push(l);
        }

        let seen = new Set(), arr = new Set();

        function dfs(node, par){
            if(seen.has(node)) return false;
            seen.add(node);

            for(const child of tree.get(node)){
                if(child === par) continue;
                if(!dfs(child, node)) return false;
            }
            arr.add(node);
            return true;
        }

        function all_visited(arr){
            for(let i = 0; i < n; i++){
                if(!arr.has(i)) return false;
            }
            return true;
        }

        return (dfs(0, -1) && edges.length === n - 1 && all_visited(arr));
    }
}
