class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let min = Infinity;

        let L = 0, R = 1;

        while(R < prices.length){
            min = Math.min(min, prices[L]);

            profit = Math.max(profit, prices[R] - min);
            R++;
            L++;
        }

        return profit;
    }
}