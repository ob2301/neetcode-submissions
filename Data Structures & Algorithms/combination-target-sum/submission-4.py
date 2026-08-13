class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []
        nums.sort()

        def dfs(target, combo, i):
            if target == 0:
                res.append(combo.copy())
                return
            
            if target < 0:
                return
            
            if i == len(nums):
                return
            
            combo.append(nums[i])
            dfs(target - nums[i], combo, i)
            combo.pop()
            dfs(target, combo, i + 1)    
            
        dfs(target, [], 0)
        return res