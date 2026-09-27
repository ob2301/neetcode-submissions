class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        res = 0
        l, r = 0, 0
        cur = 1

        while l < len(nums) and r < len(nums):
            cur *= nums[r]

            while l <= r and cur >= k:
                cur /= nums[l]
                l += 1
            
            if cur < k:
                res += (r - l + 1)

            r += 1
        
        return res





        