class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let L = 0, R = s.length - 1;

        while(L < R){
            let temp = s[L];
            s[L] = s[R];
            s[R] = temp;
            L++;
            R--;
        }
        return s;
    }
}
