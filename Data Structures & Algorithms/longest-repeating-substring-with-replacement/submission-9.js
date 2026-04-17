class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0, L = 0, R = 1, map = new Map();
        map.set(s[L], 1);

        while(R < s.length){
            if(map.has(s[R])){
                map.set(s[R], map.get(s[R]) + 1);
            }
            else{
                map.set(s[R], 1);
            }
            let m = R - L - Math.max(...map.values()) + 1;
            while(m > k){
                    map.set(s[L], map.get(s[L]) - 1);
                    L++;
                    m = (R - L + 1)- Math.max(...map.values());
                }
            max = Math.max(max, R - L + 1);
            R++;
        }
        return max;
    }
}
