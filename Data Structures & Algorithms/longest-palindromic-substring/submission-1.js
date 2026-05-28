class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let res = 0, str = "";

        for(let i = 0; i < s.length; i++){

            //odd length
            let L = i, R = i;
            while(L >= 0 && R < s.length && s[L] === s[R]){
                if(R - L + 1 > res){
                    res = R - L + 1;
                    str = s.substring(L, R + 1);
                }
                R += 1;
                L -= 1;
            }

            //even length
            L = i, R = i + 1;

            while(L >= 0 && R < s.length && s[L] === s[R]){
                if(R - L + 1 > res){
                    res = R - L + 1;
                    str = s.substring(L, R + 1);
                }
                R += 1;
                L -= 1;
            }
        }

        return str;
    }
}
