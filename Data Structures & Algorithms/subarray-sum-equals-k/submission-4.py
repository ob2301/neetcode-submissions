class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        res = 0

        prefixSums = {0 : 1}
        #prefix : times it occurs

        total = 0

        i = 0

        while i < len(nums):
            total += nums[i]

            if total - k in prefixSums:
                res += prefixSums[total - k]

            if total in prefixSums:
                prefixSums[total] += 1
            else:
                prefixSums[total] = 1
            
            i += 1
        return res

        
        
        