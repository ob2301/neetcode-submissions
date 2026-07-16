class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        dp = {len(nums) - 1: 1}
        best = 1

        for i in range(len(nums) - 2, -1, -1):
            res = 1
            for j in range(i + 1, len(nums)):
                if nums[i] < nums[j]:
                    res = max(res, 1 + dp[j])
            
            dp[i] = res
            best = max(best, res)

        return best

        
