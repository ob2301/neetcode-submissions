class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0 || !s) return 0;
        if(s.length == 1) return 1;

        let L = 0, R = 1, max = 1, set = new Set();
        set.add(s[L]);
        while(R < s.length){
            //max = Math.max(max, set.size);
            if(set.has(s[R])){
                while(set.has(s[R]) && L < R)
                {
                    set.delete(s[L]);
                    L++;
                }
            }
            set.add(s[R]);
            R++;
            max = Math.max(max, set.size);
            
        }
        return max;
    }
}
