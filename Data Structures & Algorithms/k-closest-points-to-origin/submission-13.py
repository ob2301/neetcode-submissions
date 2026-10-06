class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        minHeap = []

        for i in range(len(points)):
            x, y = points[i][0], points[i][1]

            dist = math.sqrt((x * x) + (y * y))

            heapq.heappush(minHeap, (dist, (x, y)))
        
        res = []

        while minHeap and k > 0:
            (dist, (x, y)) = heapq.heappop(minHeap)

            res.append(([x, y]))
            k -= 1
        
        return res
