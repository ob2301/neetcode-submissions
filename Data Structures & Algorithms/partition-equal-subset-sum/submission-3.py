class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        #want subset sum = half total arr

        res = sum(nums)

        if res % 2 != 0:
            return False

        cache = {}

        def dfs(i, goal):
            if i >= len(nums) or i < 0:
                return 0 == goal
            
            if (i, goal) in cache:
                return cache[(i, goal)]

            cache[(i, goal)] = dfs(i + 1, goal) or dfs(i + 1, goal - nums[i])
            return cache[(i, goal)]
        
        return dfs(0, res/2)

