class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {

        if(s.length === 1 || s.length === 0) return s;

        let res = s[0];

        for(let i = 0; i < s.length; i++){
            //even
            let L = i - 1, R = i + 1;

            while(L >= 0 && R < s.length){
                if(s[L] === s[R]){
                    if(res.length < R - L + 1){
                        res = s.substring(L, R + 1);
                    }
                    R++;
                    L--;
                }
                else{
                    break;
                }
            }



            //odd
            L = i, R = i + 1;

            while(L >= 0 && R < s.length){
                if(s[L] === s[R]){
                    if(res.length < R - L + 1){
                        res = s.substring(L, R + 1);
                    }
                    R++;
                    L--;
                }
                else{
                    break;
                }
            }
        }

        return res;
    }
}
