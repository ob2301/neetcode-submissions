class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        function isPalindrome(l, r){
            while(l < r){
                if(s[l] !== s[r]) return false;
                r--;
                l++;
            }
            return true;
        }
        let L = 0, R = s.length-1;

        while(L < R){
            if(s[L] !== s[R]){
                return isPalindrome(L + 1, R) || isPalindrome(L, R - 1);
            }
            L++;
            R--;
        }
        return true;
    }
}
