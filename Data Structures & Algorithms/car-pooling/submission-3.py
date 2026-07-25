class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        trips.sort(key=lambda m: m[1])
        minHeap = []
        cur = 0
        
        for numPass, origin, to in trips:
            
            while minHeap and minHeap[0][0] <= origin:
                cur -= minHeap[0][2]
                heapq.heappop(minHeap)
            
            heapq.heappush(minHeap, (to, origin, numPass))
            cur += numPass

            if cur > capacity:
                return False

        return True

