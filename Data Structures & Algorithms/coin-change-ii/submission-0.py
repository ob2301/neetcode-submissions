class Solution:
    def change(self, amount: int, coins: List[int]) -> int:
        dp = [[0 for _ in range(amount + 1)] for _ in range(len(coins))] # dp[coin][amount]
        for i in range(len(coins)):
            dp[i][0] = 1

        for coin in range(len(coins)):
            for left in range(amount + 1):
                if left == 0:
                    dp[coin][0] = 1
                else:
                    dp[coin][left] = dp[coin][left-coins[coin]] + dp[coin-1][left]

        return dp[len(coins) - 1][amount]