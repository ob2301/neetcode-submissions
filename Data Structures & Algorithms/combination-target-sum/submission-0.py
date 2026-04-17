class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        
        final = []

        def dfs(i, final, cur):
            if i >= len(nums):
                return

            if sum(cur) == target:
                final.append(cur.copy())
                return
            
            if sum(cur) > target:
                return
            
            cur.append(nums[i])
            dfs(i, final, cur)

            cur.pop()
            dfs(i + 1, final, cur)
        
        dfs(0, final, [])
        return final