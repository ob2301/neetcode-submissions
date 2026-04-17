class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max = 1;
        if(s.length === 0) return 0;

        let L = 0, R = 1;

        let cur_set = new Set();
        cur_set.add(s[L]);

        while(R < s.length && L <= R){
            if(cur_set.has(s[R])){
                max = Math.max(max, cur_set.size);
                while(cur_set.has(s[R]) && cur_set.size >= 0){
                    cur_set.delete(s[L]);
                    L++;
                }
            }
            else{
                cur_set.add(s[R++]);
            }
            max = Math.max(max, cur_set.size);
        }
        return max;
    }
}
