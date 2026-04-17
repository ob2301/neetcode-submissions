class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:

        cache = {}
        count = 0
        
        def dfs(i, sum):
            nonlocal count

            if i == len(nums):
                if sum == target:
                    return 1
                else:
                    return 0
            
            if (i, sum) in cache:
                return cache[(i, sum)]
            
            cache[(i, sum)] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i])
            return cache[(i, sum)]

        return dfs(0, 0)

        # return count
