class Solution:
    def integerBreak(self, n: int) -> int:
        dp = {}

        def dfs(x):
            if x <= 2:
                return x
            if x in dp:
                return dp[x]

            ans = x
            for i in range(1, x):
                ans = max(ans, i * dfs(x - i))

            dp[x] = ans
            return ans

        ans = 0
        for i in range(1, n):
            ans = max(ans, i * dfs(n - i))
        return ans