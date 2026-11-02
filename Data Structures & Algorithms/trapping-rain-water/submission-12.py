class Solution:
    def trap(self, height: List[int]) -> int:
        #have a min on each side, increment and if curr block is greater than min,
        #we add to our sum the water area in between (length * min)

        l, r = 0, len(height) - 1

        maxL, maxR = height[l], height[r]
        maxSum = 0

        while l <= r:
            curL, curR = height[l], height[r]

            if curL < maxL and curL < maxR:
                maxSum += (min(maxL, maxR) - curL)
            
            if curR < maxL and curR < maxR:
                maxSum += (min(maxL, maxR) - curR)
            
            if curL > maxL:
                maxL = curL
            
            if curR > maxR:
                maxR = curR
            
            if curL < curR:
                l += 1
            else:
                r -= 1
        return maxSum

