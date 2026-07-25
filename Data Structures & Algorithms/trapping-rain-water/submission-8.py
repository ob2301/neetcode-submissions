class Solution:
    def trap(self, height: List[int]) -> int:
        maxL = 0
        maxR = 0
        total = 0

        l = 0
        r = len(height) - 1

        while l <= r:
            curL = height[l]
            curR = height[r]

            if l == r:
                if curL < maxL and curR < maxR:
                    if maxL < maxR:
                        total += maxL - curL
                        break
                    else:
                        total += maxR - curR
                        break

            if curL < maxL:
                total += maxL - curL
            else:
                maxL = curL
            
            if curR < maxR:
                total += maxR - curR
            else:
                maxR = curR
            # 5
            if height[r] < height[l]:
                r -= 1
            else:
                l += 1

        return total


