class Solution:
    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        dp = [(0, 0) for _ in range(len(nums) + 1)] # (one_flip, no_flip)

        ret = 0

        for i, num in enumerate(nums):
            if num == 0:
                dp[i+1] = (1 + dp[i][1], 0)
            else:
                dp[i+1] = (1 + dp[i][0], 1 + dp[i][1])
            
            ret = max(ret, dp[i+1][0], dp[i+1][1])
            

        return ret
