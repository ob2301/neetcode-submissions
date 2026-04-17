class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        //hint, what are edges? and, we cant go back where we came from

        let seen = new Set(), map = new Map();

        for(let i = 0; i < n; i++){
            map.set(i, []);
        }

        for(const [l, r] of edges){
            map.get(l).push(r);
            map.get(r).push(l);
        }

        function dfs(src, pr){
            if(seen.has(src)) return false;
            seen.add(src);

            for(const l of map.get(src)){
                if(pr === l) continue;
                if(!dfs(l, src)) return false;
            }
            //seen.delete(src);
            return true;
        }

        dfs(0, -1); //-1 for no parent

        for(let i = 0; i < n; i++){
            if(!seen.has(i)) return false;
        }

        return edges.length === n - 1;
    }
}
