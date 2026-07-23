class Solution:
    def maxArea(self, heights: List[int]) -> int:

        l = 0
        r = len(heights) - 1
        total = 0

        while l < r:
            local = (r - l) * min(heights[l], heights[r])

            total = max(total, local)

            if heights[r] > heights[l]:
                l+=1
            else:
                r-=1
            
        return total