class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        let res = [], sub = [];

        dfs(sub, 1, n, k);

        function dfs(sub, i, n, k){
            if(sub.length === k){
                res.push([...sub]);
                return;
            }

            if(i > n) return;

            sub.push(i);
            dfs(sub, i + 1, n, k);
            sub.pop();
            dfs(sub, i + 1, n, k);
        }

        return res;
    }
}
