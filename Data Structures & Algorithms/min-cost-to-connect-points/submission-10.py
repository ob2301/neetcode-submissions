class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        adj = {}

        minHeap = []

        for i in range(len(points)):
            adj[i] = []

        for i in range(len(points)):
            x, y = points[i]
            for j in range(i + 1, len(points)):
                x2, y2 = points[j]
                dist = abs(x2 - x) + abs(y2 - y)
                adj[i].append((dist, j))
                adj[j].append((dist, i))
                #from the ith point to the jth point
        
        heapq.heappush(minHeap, (0, 0))
        seen = set()
        total = 0

        while minHeap:
            cost, point = heapq.heappop(minHeap)

            if point in seen:
                continue
            
            seen.add(point)
            total += cost

            if len(seen) == len(points):
                return total

            for cost2, target in adj[point]:
                heapq.heappush(minHeap, (cost2, target))
            
                

        





            


        