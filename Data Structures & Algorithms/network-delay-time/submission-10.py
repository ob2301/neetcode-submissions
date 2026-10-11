class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = {}

        for i in range(1, n + 1):
            adj[i] = []

        for u, v, t in times:
            adj[u].append((t, v))
        

        minHeap = []
        seen = set()

        heapq.heappush(minHeap, (0, k))

        while minHeap:
            time, node = heapq.heappop(minHeap)
            if node in seen:
                continue

            seen.add(node)

            if len(seen) == n:
                return time

            for time2, target in adj[node]:
                heapq.heappush(minHeap, (time2 + time, target))
        
        return -1



            

        

        