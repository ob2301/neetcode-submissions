class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let L = 0, R = 0, map = new Map(), max = 0, window = 0;

        while(R < s.length){
            if(map.has(s[R])){
                map.set(s[R], map.get(s[R]) + 1);
                max = Math.max(max, map.get(s[R]));
            }
            else{
                map.set(s[R], 1);
                max = Math.max(max, 1);
            }

            while(R - L + 1 - k > max && L < R){
                map.set(s[L], map.get(s[L]) - 1 || 0);
                L++;
            }
            window = Math.max(R - L + 1, window);
            R++;
        }

        return window;
    }
}
