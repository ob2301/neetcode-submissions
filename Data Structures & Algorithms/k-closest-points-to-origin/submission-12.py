class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []

        for x, y in points:
            dist = math.sqrt((x*x) + (y*y))
            heapq.heappush(minHeap, (dist, [x, y]))
        
        res = []

        while k:
            res.append(heapq.heappop(minHeap)[1])
            k -= 1
        
        return res