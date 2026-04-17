class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {

        //reedddoooo
        let res = [];

        function search(dots, pos, subset){
            if(dots > 4) return;

            if(dots === 4 && pos === s.length){
                res.push(subset.slice(0,-1));
                return;
            }

            for(let i = pos; i < Math.min(pos + 3, s.length); i++){
                if(i !== pos && s[pos] === '0') continue;

                if(parseInt(s.slice(pos, i + 1)) >= 0 && parseInt(s.slice(pos, i + 1)) < 256){
                    search(dots + 1, i + 1, subset + s.slice(pos, i + 1) + '.');
                }
            }
         }

        search(0, 0, "");
         return res;
    }
}
