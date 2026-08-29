class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        minHeap = []
        adj = {}

        for i in range(len(points)):
            adj[i] = []

        for i in range(len(points) - 1):
            x1, y1 = points[i][0], points[i][1]
            j = i + 1
            while j < len(points):
                x2, y2 = points[j][0], points[j][1]

                dist = abs(x1 - x2) + abs(y1 - y2)
                adj[i].append((dist, j))
                adj[j].append((dist, i))

                j += 1

        #bfs and add to a minHeap

        heapq.heappush(minHeap, (0, 0))
        seen = set()
        res = 0

        while minHeap:
            weight, node = heapq.heappop(minHeap)

            if node in seen:
                continue

            res += weight

            seen.add(node)
            
            for dist, nextNode in adj[node]:
                heapq.heappush(minHeap, (dist, nextNode))
        
        return res

            


        