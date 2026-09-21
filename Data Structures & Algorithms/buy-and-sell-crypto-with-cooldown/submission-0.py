class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        dp_buy = [0] * (len(prices) + 2)
        dp_sell = [0] * (len(prices) + 2)

        for i in range(len(prices) - 1, -1, -1):
            dp_buy[i] = max(dp_buy[i + 1], dp_sell[i + 1] - prices[i])
            dp_sell[i] = max(dp_sell[i + 1], dp_buy[i + 2] + prices[i])

        return dp_buy[0]
