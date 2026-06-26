class Solution:
    def findMin(self, nums: List[int]) -> int:
        
        l, r = 0, len(nums) - 1

        while l < r:
            
            m = l + (r - l)//2

            mid = nums[m]
            mid_l = nums[m-1]



            if mid < nums[-1]:
                r = m 
            
            else:
                l = m + 1
        
        return nums[l]

    # 4 5 6 7 8 9 0 1 2 3

    # 8 9 0 1 2 3 4 5 6 7 