class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let p = 0;
        for(let i = prices.length - 1; i > 0; i--){
            if(prices[i - 1] < prices[i]) 
                p += (prices[i] - prices[i - 1]);
        }
        return p;
    }
}
