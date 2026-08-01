class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        trips.sort(key=lambda x: x[1])

        minHeap = []
        total = 0

        for passengers, origin, dest in trips:
            while minHeap and minHeap[0][0] <= origin:
                total -= minHeap[0][1]
                heapq.heappop(minHeap)
            
            heapq.heappush(minHeap, (dest, passengers, origin))
            total += passengers

            if total > capacity:
                return False
        
        
        return True

        





