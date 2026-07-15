class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {

        let res = [];

        function dfs(i, cur){
            if(i >= s.length){
                res.push([...cur]);
                return;
            }

            for(let start = i; start < s.length; start++){
                if(isPali(i, start)){
                    cur.push(s.substring(i, start + 1));
                    dfs(start + 1, cur);
                    cur.pop();
                }
            }
        }

        dfs(0, []);
        return res;

        function isPali(start, end){
            let L = start, R = end;

            while(L <= R){
                if(s[L] !== s[R]) return false;
                L++;
                R--;
            }

            return true;
        }
    }
}
