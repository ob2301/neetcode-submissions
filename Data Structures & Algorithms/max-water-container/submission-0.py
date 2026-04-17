class Solution:
    def maxArea(self, heights: List[int]) -> int:
        L = 0
        R = len(heights) - 1
        area = 0

        while(L < R):
            height = min(heights[L], heights[R])
            width = R - L;
            area = max(area, height * width)
            if(heights[L] > heights[R]):
                R-=1
            elif(heights[L] <= heights[R]):
                L+=1
            
        return area
        