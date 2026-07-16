import math

class Solution:
    def numSquares(self, n: int) -> int:
        dp = {}
        def dfs(i, left):
            if (i, left) in dp:
                return dp[(i, left)]
            if left == 0:
                return 0
            if left < 0:
                return float("inf")
            if i == 1:
                return left

            ret = float("inf")
            ret = min(ret, 1 + dfs(i, left - i ** 2))
            ret = min(ret, dfs(i - 1, left))
            dp[(i, left)] = ret
            return ret

        return dfs(int(math.sqrt(n)), n)