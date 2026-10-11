class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        adj = {}

        for i in range(n):
            adj[i] = []

        for source, dest, price in flights:
            adj[source].append((price, dest))
        
        minHeap = []
        minStops = {}

        heapq.heappush(minHeap, (0, src, 0))

        while minHeap:
            cost, airport, stops = heapq.heappop(minHeap)

            if airport == dst:
                return cost
            if stops > k:
                continue
            if not airport in minStops:
                minStops[airport] = stops
            elif minStops[airport] < stops:
                continue
            
            for price, dest in adj[airport]:
                heapq.heappush(minHeap, (price + cost, dest, stops + 1))
        
        return -1


