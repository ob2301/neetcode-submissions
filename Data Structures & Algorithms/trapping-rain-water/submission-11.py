class Solution:
    def trap(self, height: List[int]) -> int:
        leftMax = 0
        rightMax = 0
        res = 0

        l = 0
        r = len(height) - 1

        while l < r:
            if height[l] < leftMax:
                res += (leftMax - height[l])
            
            if height[l] > leftMax:
                leftMax = height[l]
            
            if height[r] < rightMax:
                res += (rightMax - height[r])
            
            if height[r] > rightMax:
                rightMax = height[r]
            
            if rightMax > leftMax:
                l += 1
            else:
                r -= 1
        
        
        return res


