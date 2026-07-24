class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        newNums = nums[len(nums) - (k % len(nums)):]
        newNums.extend(nums[0: len(nums) - (k % len(nums))])
        nums[:] = newNums