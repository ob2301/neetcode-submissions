class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        
        l, r = 0, 0
        sum = 0
        min_window = float('inf')
        while r < len(nums):

            sum += nums[r]

            while sum >= target:
                if r-l + 1 < min_window:
                    min_window = r-l + 1

                sum -= nums[l]
                l+=1
                
            r+=1
   
    
        return 0 if min_window == float("inf") else min_window
