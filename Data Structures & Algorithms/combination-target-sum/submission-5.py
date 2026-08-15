class Solution:
    def combinationSum(self, nums: List[int], target: int) -> List[List[int]]:
        ret = []
        
        def dfs(curr_sum, arr, i):
            nonlocal ret

            arr.append(nums[i])
            curr_sum += nums[i]

            if curr_sum == target:
                ret.append(arr.copy())
            elif curr_sum < target:
                if i < len(nums):
                    dfs(curr_sum, arr, i)
    
            arr.pop()
            curr_sum -= nums[i]

            if i < len(nums) - 1:
                dfs(curr_sum, arr, i + 1)
            
            return
        
        dfs(0, [], 0)
        return ret
