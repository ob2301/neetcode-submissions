class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        res = []

        def dfs(i, subset):
            if sum(subset) == target:
                res.append(subset.copy())
                return
            elif sum(subset) > target:
                return
            elif i == len(nums):
                return
            
            subset.append(nums[i])
            dfs(i, subset)
            subset.remove(nums[i])
            dfs(i + 1, subset)
        
        dfs(0, [])
        return res