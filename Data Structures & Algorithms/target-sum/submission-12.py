class Solution:
    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        cache = {}

        def dfs(s, i):
            if i == len(nums) or i < 0:
                if s == target:
                    return 1
                else:
                    return 0
            
            if (s, i) in cache:
                return cache[(s, i)]

            cache[(s, i)] = dfs(s + nums[i], i + 1) + dfs(s - nums[i], i + 1)
            return cache[(s, i)]
        
        return dfs(0, 0)
