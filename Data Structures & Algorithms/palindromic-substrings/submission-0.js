class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let res = 0;

        for(let i = 0; i < s.length; i++){

            let L = i, R = i;

            while(L >= 0 && R < s.length && s[L] === s[R]){
                res++;
                L -= 1;
                R += 1;
            }

            L = i, R = i + 1;

            while(s[L] === s[R] && L >= 0 && R < s.length){
                res++;
                L -= 1;
                R += 1;
            }
        }

        return res;
    }
}
