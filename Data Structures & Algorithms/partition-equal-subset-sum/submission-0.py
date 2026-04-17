class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        memo = {}
        #trying to get one subset to equal half the sum

        total = sum(nums)

        if total % 2 != 0:
            return False
        
        def dfs(i, goal):
            if goal < 0 or i >= len(nums):
                return False
            if goal == 0:
                return True
            
            if (i, goal) in memo:
                return memo[(i, goal)]
            
            memo[(i, goal)] = dfs(i + 1, goal) or dfs(i + 1, goal - nums[i])
            
            return memo[(i, goal)]
        
        return dfs(0, total/2)

