class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []
        
        def dfs(used, ret):
            if len(ret) == len(nums):
                result.append(ret.copy())
                return
            
            for num in nums:
                if num not in used:
                    used.add(num)
                    ret.append(num)
                    dfs(used, ret)
                    used.remove(num)
                    ret.pop()
            
            return

        dfs(set(), [])
        return result
