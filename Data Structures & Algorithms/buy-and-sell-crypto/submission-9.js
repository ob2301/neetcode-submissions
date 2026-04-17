class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;

        let L = 0, R = 1;

        while(R < prices.length){
            const p = prices[R] - prices[L];
            profit = Math.max(profit, p);

            while(p <= 0 && L < R){
                L++;
            }
            R++;
        }

        return profit;
    }
}