class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l, r = 0, 0
        longest = 0

        while l < len(nums) and r < len(nums):
            if k == 0 and nums[r] == 0:
                while l <= r and nums[l] != 0:
                    l += 1
                l += 1
                k += 1
            
            if nums[r] == 0:
                k -= 1
            
            r += 1
            longest = max(longest, r - l)

        return longest




        