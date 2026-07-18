class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1 for _ in range(n)]
        paths = 1

        for r in range(m - 2, -1, -1):
            paths = 1
            for c in range(n - 2, -1, -1):
                paths = dp[c] + paths
                dp[c] = paths

        return paths
