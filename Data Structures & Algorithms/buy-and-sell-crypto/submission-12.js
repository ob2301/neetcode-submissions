class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let R = prices.length - 1;
        let total = 0;

        while(R > 0){
            let mock_l = 0;
            let min = Infinity;
            while(mock_l < R){
                min = Math.min(prices[mock_l], min);
                mock_l++;
            }

            total = Math.max(total, prices[R] - min);
            R--;
        }

        return total;
    }
}