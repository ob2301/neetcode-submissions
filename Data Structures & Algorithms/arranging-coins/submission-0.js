class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let count = 0;
        if(n === 0) return 0;

        for(let i = 1; i <= n; i++){
            n -= i;
            if(n >= 0) count++;
            else{
                break;
            }
        }


        return count;
    }
}
