class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = set(nums)

        res = 0
        local = 0
        # 2 3 4 5 10 20
        # get max min, then count

        if not nums:
            return 0
        

        globalMax = max(nums)
        globalMin = min(nums)

        i = globalMin

        while i <= globalMax:
            if i in nums:
                local += 1
            else:
                local = 0
            i = i + 1
            
            res = max(res, local)

        return res
    