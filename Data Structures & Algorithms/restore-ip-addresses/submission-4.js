class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {
        let res = [];

        if(s.length > 12) return [];

        function dfs(dots, pos, subset){
            if(dots > 4) return;

            if(dots === 4 && pos== s.length){
                res.push(subset.slice(0,-1));
                return;
            }

            for(let i = pos; i < Math.min(pos + 3, s.length); i++){

                if(s[pos] === '0' && i !== pos) continue;

                if(parseInt(s.substring(pos, i + 1)) >= 0 && parseInt(s.substring(pos, i + 1)) < 256){
                    dfs(dots + 1, i + 1, subset + s.substring(pos, i + 1) + '.');
                }
            }
        }

        dfs(0, 0, "");

        return res;
    }
}
