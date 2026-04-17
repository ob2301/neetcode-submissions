class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        const x2 = x.toString();

        let L = 0, R = x2.length - 1;

        while(L < R){
            if(x2[L] !== x2[R]) return false;

            L++;
            R--;
        }

        return x >= 0;
    }
}
