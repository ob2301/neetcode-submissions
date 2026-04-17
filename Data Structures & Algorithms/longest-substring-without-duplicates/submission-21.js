class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = s.length > 0 ? 1 : 0, cur = 1;
        let set = new Set();
        let L = 0, R = 1;
        set.add(s[L]);

        while(R < s.length && L < s.length){
            if(set.has(s[R])){
                while(L < R && set.has(s[R])){
                    set.delete(s[L]);
                    L++;
                }
                cur = R - L;
            }
            set.add(s[R++]);
            cur++;
            max = Math.max(max, cur);
        }
        return max;
    }
}
