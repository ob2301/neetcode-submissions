class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        
        let longest = 1;
        let freq = new Map();

        let L = 0, R = 0;
        let max = 0;

        while(R < s.length){
            freq.set(s[R], (freq.get(s[R]) || 0) + 1);
            max = Math.max(...freq.values());

            while(R - L + 1 - max > k){
                if(freq.get(s[L]) > 1){
                    freq.set(s[L], freq.get(s[L]) - 1);
                }
                else{
                    freq.delete(s[L]);
                }

                max = Math.max(...freq.values());
                L++;
            }


            longest = Math.max(longest, R - L + 1);
            R++;
        }
        return longest;
       
    }
}
