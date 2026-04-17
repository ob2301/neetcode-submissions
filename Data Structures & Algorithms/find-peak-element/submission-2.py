class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        
        def bs(low2, high2):
            if low2 == high2:
                return low2
            
            middle = math.floor((low2+high2) / 2)

            if nums[middle] < nums[middle + 1]:
                return bs(middle + 1, high2)
            
            else:
                return bs(low2, middle)

        return bs(0, len(nums) - 1)

            