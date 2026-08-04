class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        k = 0

        i = 0
        if len(nums) <= 1:
            return len(nums)

        while i < len(nums) and k < len(nums):
            nums[k] = nums[i]
            k += 1

            while i < (len(nums) - 1) and nums[i] == nums[i + 1]:
                i += 1
            if i < len(nums):
                i += 1
        return k