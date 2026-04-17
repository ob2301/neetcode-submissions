class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

        sum = -1001
        cur = 0

        for i in range(len(nums)):
            cur += nums[i]
            sum = max(sum, cur)
            cur = max(cur, 0)
        return sum


        