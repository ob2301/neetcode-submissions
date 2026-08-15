class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        adj = {}

        for i in range(1, n + 1):
            adj[i] = []

        for source, target, time in times:
            adj[source].append((time, target))
        
        #start from k

        time = 0

        minHeap = []
        heapq.heappush(minHeap, (0, k))
        seen = set()

        while minHeap:
            curTime, source = heapq.heappop(minHeap)
            if source in seen:
                continue
            seen.add(source)

            if len(seen) == n:
                return curTime

            for addTime, target in adj[source]:
                if not target in seen:
                    heapq.heappush(minHeap, (curTime + addTime, target))
        
        return -1
            

        

        