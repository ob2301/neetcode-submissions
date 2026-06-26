class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L = 0, R = 1;
        let profit = 0, min = Infinity;

        if(prices.length === 1) return 0;
        

        while(R < prices.length){
            min = Math.min(min, prices[L]);

            profit = Math.max(profit, prices[R] - min);
            R++;
            L++;
        }

        return profit;
    }
}