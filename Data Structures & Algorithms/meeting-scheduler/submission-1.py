class Solution:
    def minAvailableDuration(self, slots1: List[List[int]], slots2: List[List[int]], duration: int) -> List[int]:
        slots1.sort()
        slots2.sort()

        l = 0
        r = 0

        while l < len(slots1) and r < len(slots2):
            if min(slots1[l][1], slots2[r][1]) - max(slots1[l][0], slots2[r][0]) >= duration:
                return [max(slots1[l][0], slots2[r][0]), max(slots1[l][0], slots2[r][0]) + duration]
            else:
                if slots1[l][1] < slots2[r][1]:
                    l += 1
                else:
                    r += 1

        return []
