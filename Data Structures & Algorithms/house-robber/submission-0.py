class Solution:
    def rob(self, nums: List[int]) -> int:
        cache = {}

        def dfs(house):
            if house >= len(nums):
                return 0
            
            if house in cache:
                return cache[house]
            
            cache[house] = max(dfs(house + 1), nums[house] + dfs(house + 2))
            return cache[house]

        return dfs(0)