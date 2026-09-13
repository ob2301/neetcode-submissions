class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        if not nums:
            return 0

        res = max(nums)

        curMax, curMin = 1, 1

        for num in nums:
            if num == 0:
                curMax, curMin = 1, 1
            
            candidates = (curMax * num, curMin * num, num)

            curMax = max(candidates)
            curMin = min(candidates)
            res = max(res, curMax)

        return res
            
            

        


