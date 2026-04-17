class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {

        //redo later

        //remember, we track all possible (think about what that means)

        //how many choices? do we need a ... loop?
        let res = [];

        function dfs(i, dot, subset){
            if(dot === 4 && i >= s.length){
                res.push(subset.slice(0, -1));
                return;
            }

            if(dot > 4){
                return;
            }

            for(let j = i; j < Math.min(s.length, i + 3); j++){
                if(s[i] === '0' && j !== i) return;

                if(parseInt(s.slice(i, j + 1)) < 256){
                    dfs(j + 1, dot + 1, subset + s.slice(i, j + 1) + '.');
                }
            }
        }

        dfs(0, 0, '');
        return res;
    }
}
