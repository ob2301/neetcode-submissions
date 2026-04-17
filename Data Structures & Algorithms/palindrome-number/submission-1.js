class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        let str = x.toString();

        if(str.length === 1 && parseInt(str[0]) >= 0) return true;

        let L = 0, R = str.length - 1;

        while(L < R){
            if(str[L++] !== str[R--]) return false;
        }
        return true;
    }
}
