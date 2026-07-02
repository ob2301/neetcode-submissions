class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let n = s.length;
        let i = n - 1,
            length = 0;
        while (s.charAt(i) === ' ') {
            i--;
        }
        while (i >= 0 && s.charAt(i) !== ' ') {
            i--;
            length++;
        }
        return length;
    }
}