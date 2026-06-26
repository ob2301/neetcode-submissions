class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        
        if h < len(piles):
            return -1
        
        l, r = 1, max(piles)
        res = r

        while l <= r:

            m = (l+r)//2

            time = 0
            for p in piles:
                time += math.ceil(p / m)

            if time <= h:
                r = m -1
                res = m
            else:
                l = m + 1

        return res
