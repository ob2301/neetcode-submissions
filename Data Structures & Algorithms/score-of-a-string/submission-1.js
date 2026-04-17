class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let sum = 0;

        if(s.length === 1) return 0;
        for(let i = 1; i < s.length; i++){
            sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i-1));
        }
        return sum;
    }
}
