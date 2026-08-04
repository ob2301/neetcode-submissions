class Solution:
    def maxArea(self, heights: List[int]) -> int:

        l = 0
        total = 0

        r = len(heights) - 1

        while l < r:
            left = heights[l]
            right = heights[r]

            total = max(total, (r - l) * min(left, right))

            if min(left, right) == left:
                l += 1
            else:
                r -= 1
        return total