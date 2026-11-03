class Solution:
    def canSeePersonsCount(self, heights: List[int]) -> List[int]:
        stack = []
        res = [0] * len(heights)

        i = len(heights) - 1

        while i >= 0:
            height = heights[i]


            while stack and stack[-1] < height:
                res[i] += 1
                stack.pop()
            
            if stack:
                res[i] += 1
            stack.append(height)
            i -= 1
        return res


        