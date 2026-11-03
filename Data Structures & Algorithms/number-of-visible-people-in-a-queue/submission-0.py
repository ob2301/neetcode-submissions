class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        stack = []
        res = [0] * len(heights)

        i = len(heights) - 1

        while i >= 0:
            curHeight = heights[i]

            while stack and stack[-1] < curHeight:
                stack.pop()
                res[i] += 1
                
            if stack:
                res[i] += 1
            stack.append(curHeight)
            i -= 1
        
        return res


        
            

            
        