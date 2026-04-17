class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {

        let res = [];

        function dfs(i, dots, subset){
            if(i >= s.length && dots === 4){
                res.push(subset.slice(0, -1));//remove the dot
                return; 
            }

            if(dots > 4) return;

            for(let j = i; j < Math.min(i + 3, s.length); j++){
                if(s[i] === '0' && j !== i) return;

                if(parseInt(s.slice(i, j + 1)) < 256){
                    dfs(j + 1, dots + 1, subset + s.slice(i, j + 1) + '.');
                }
            }

            
        }
        dfs(0, 0, '');
        return res;
    }
}
