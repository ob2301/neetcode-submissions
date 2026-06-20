class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let L = 0, R = 1;

        let seen = new Set();
        let max = 1;

        if(!s.length || s.length === 1) return s.length;
        seen.add(s[L]);

        while(R < s.length){
            while(L < R && seen.has(s[R])){
                seen.delete(s[L]);
                L++;
            }
            max = Math.max(max, R - L + 1);
            seen.add(s[R]);

            R++;
        }

        return max;
    }
}
