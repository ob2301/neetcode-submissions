class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res = []
        nums = sorted(candidates)

        def dfs(i, combo, rest):
            if rest == 0:
                res.append(combo.copy())
                return
            if i == len(nums):
                return
            if rest < 0:
                return

            combo.append(nums[i])
            dfs(i + 1, combo, rest - nums[i])
            combo.pop()

            j = i
            while j < len(nums) and nums[i] == nums[j]:
                j+=1
            if j < len(nums):
                dfs(j, combo, rest)
            else:
                return
        
        dfs(0, [], target)
        return res
            
