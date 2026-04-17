class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if(n >= 0){
            if(n > 0) return x * this.myPow(x, n-1);
            else{
                return 1;
            }
        }
        if(n < 0){
            return 1/x * this.myPow(x, n + 1);
        }
    }
}
