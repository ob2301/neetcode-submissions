class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i = len(prices) - 1
        res = 0
        curMax = 0

        while i > 0:
            if prices[i - 1] < prices[i]:
                curMax += prices[i] - prices[i - 1]
                res = max(res, curMax)
            i -= 1
        return res
