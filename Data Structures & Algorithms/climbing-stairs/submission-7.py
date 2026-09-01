class Solution:
    def climbStairs(self, n: int) -> int:
        
        dp1 = 1
        dp2 = 2
        res = 2
        
        for i in range(n-2):
            res = dp1 + dp2
            dp1 = dp2
            dp2 = res

        return res if n >= 2 else 1
