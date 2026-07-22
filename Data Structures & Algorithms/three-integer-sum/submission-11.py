class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = set()
        nums = sorted(nums)

        for i in range(len(nums)):
            l = i + 1
            r = len(nums) - 1

            while l < r:

                total = nums[l] + nums[i] + nums[r]
                total2 = tuple(sorted([nums[l], nums[i], nums[r]]))

                if total == 0 and not total2 in res:
                    res.add(total2)
                    l += 1
                    r -= 1
                
                elif total == 0 and total2 in res:
                    l += 1
                    r -= 1
                
                if total > 0:
                    r-=1
                
                if total < 0:
                    l += 1
                    

        return [list(t) for t in res]