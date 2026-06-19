class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s) {
        let count = 0;
        
        for(let i = 0; i < s.length; i++){
            
            //even
            let L = i, R = i;

            while(L >= 0 && R < s.length && s[L] === s[R]){
                count++;
                L--;
                R++;
            }

            //odd
            L = i, R = i + 1;

            while(L >= 0 && R < s.length && s[L] === s[R]){
                count++;
                L--;
                R++;
            }
        }
        return count;
    }
}
