class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        cache = {}
        #sum -> first index

        total = 0
        for i in range(len(nums)):
            total += nums[i]

            r = total % k
            if r == 0 and i >= 1:
                return True
            
            if r in cache and i - cache[r] >= 2:
                return True
            
            if not r in cache:
                cache[r] = i
        
        return False
