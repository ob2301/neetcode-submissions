import sys
sys.setrecursionlimit(10**6)
class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = {}
        #res = float('inf')

        def dfs(remaining):
            res = float('inf')
            if remaining in dp:
                return dp[remaining]

            if remaining == 0:
                return 0
            
            if remaining < 0:
                return float('inf')

            for i in range(len(coins)):
                if remaining - coins[i] >= 0:
                    res = min(res, 1 + dfs(remaining - coins[i]))
            
            dp[remaining] = res
            return res

        res = dfs(amount)
        if res == float('inf'):
            return -1
        return res