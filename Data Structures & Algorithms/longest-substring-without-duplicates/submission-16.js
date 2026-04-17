class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0) return 0;
        let cur_window = new Set(), max = 0;

        let L = 0, R = 0;
        //cur_window.add(s[L]);

        while(R < s.length){
            while(cur_window.has(s[R])){
                    //if(L === R) break;
                    cur_window.delete(s[L]);
                    L++;
                }
           
                //count++;
                cur_window.add(s[R]);
                max = Math.max(max, cur_window.size);
           
            R++;
           
        }
        return max;
    }
}
