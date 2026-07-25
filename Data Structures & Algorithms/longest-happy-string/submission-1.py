class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        maxHeap = []

        if not a == 0: heapq.heappush(maxHeap, (-a, "a"))
        if not b == 0: heapq.heappush(maxHeap, (-b, "b"))
        if not c == 0: heapq.heappush(maxHeap, (-c, "c"))

        res = ""

        while maxHeap:
            count, s = heapq.heappop(maxHeap)

            count = -count

            if len(res) >= 2 and res[len(res) - 1] == s and res[len(res) - 2] == s:
                if not maxHeap:
                    return res
                
                count2, s2 = heapq.heappop(maxHeap)
                count2 = -count2
                res += s2
                if count2 > 1:
                    heapq.heappush(maxHeap, (-(count2 - 1), s2))
                heapq.heappush(maxHeap, (-count, s))


            else: 
                res += s
                if count > 1:
                    heapq.heappush(maxHeap, (-(count - 1), s))
            

        return res
