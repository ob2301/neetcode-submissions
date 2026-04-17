class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let L = 0, R = 1, max_window = 0, cur_window = 0;

        while(R < prices.length){
            cur_window = prices[R] - prices[L];
            max_window = Math.max(cur_window, max_window);
            while(cur_window < 0 && L < R){
                L++;
            }
            R++;
        }
        return max_window;
    }
}