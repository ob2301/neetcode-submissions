class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        
        def helper(s, e):
            rob1, rob2 = 0, 0
            
            for i in range(s, e):
                rob1, rob2 = rob2, max(rob2, nums[i] + rob1)

            return rob2

        return max(helper(0, len(nums) - 1), helper(1, len(nums)))