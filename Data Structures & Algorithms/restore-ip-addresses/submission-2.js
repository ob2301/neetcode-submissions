class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {

        //reedddoooo

        if(s.length > 12) return [];

        let res = [];

        function dfs(i, dots, subset){
            if(dots === 4 && i === s.length){
                res.push(subset.slice(0,-1));
                return;
            }

            if(dots > 4) return;

            for(let j = i; j < Math.min(s.length, i + 3); j++){
                if(parseInt(s[i]) === 0 && j !== i){
                    continue;
                }

                if(parseInt(s.slice(i, j + 1)) <= 255){
                    dfs(j + 1, dots + 1, subset + s.slice(i, j + 1) + '.');
                }
            }
        }

        dfs(0, 0, "");
        return res;
    }
}
