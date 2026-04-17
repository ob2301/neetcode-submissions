class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map(), res = 0;

        let L = 0, R = 0, max = 0;

        while(R < s.length){
            if(map.has(s[R])){
                map.set(s[R], map.get(s[R]) + 1);
                max = Math.max(max, map.get(s[R]));
            }
            else{
                map.set(s[R], 1);
                max = Math.max(max, 1);
            }

                while((R - L + 1) - max > k && L <= R){
                    map.set(s[L], map.get(s[L]) - 1);
                    L++;

                }
            res = Math.max(res, R - L + 1);
            R++;
        }

        return res;
    }
}
