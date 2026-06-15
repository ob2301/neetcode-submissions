class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let longest = "", first = true;
        if(!s.length || s.length === 1) return s;
        
        for(let i = 0; i < s.length; i++){
               
            let L = i - 1, R = i + 1;

            while(R < s.length && L >= 0){
                if(s[R] !== s[L]) break;

                if(s.substring(L, R + 1).length > longest.length){
                longest = s.substring(L, R + 1);
                }
                L--;
                R++;
            }
                L = i, R = i + 1;

                while(R < s.length && L >= 0){
                    if(longest.length === 0) longest = s[L];
                    if(s[R] !== s[L]) break;

                if(s.substring(L, R + 1).length > longest.length){
                longest = s.substring(L, R + 1);
                }
                L--;
                R++;
                }
            }
        return longest;
    }
}
