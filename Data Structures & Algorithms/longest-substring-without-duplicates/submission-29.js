class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let seen = new Set(), length = 0;

        let l = 0, r = 0;

        while(r < s.length){
            while(l < r && seen.has(s[r])){
                seen.delete(s[l]);
                l++;
            }
            seen.add(s[r]);
            r++;
            length = Math.max(r - l, length);
        }

        if(s.length === 0) return 0;

        return length;
    }
}
