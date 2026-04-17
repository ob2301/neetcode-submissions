class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        if(s.length === 1 && t.indexOf(s[0]) !== -1) return true;

        let i = 0, j = 0;

        while(i < t.length && j < s.length){
            if(t[i] === s[j]){
                j++;
            }
            i++;
        }
        return j === s.length;
    }
}
