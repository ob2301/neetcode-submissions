import heapq

class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        trips.sort(key = lambda x: x[1])
        heap = []
        total_people = 0

        for ppl, start, end in trips:
            while heap and heap[0][0] <= start:
                _, people = heapq.heappop(heap)
                total_people -= people

            total_people += ppl 
            if total_people > capacity:
                return False

            heapq.heappush(heap, (end, ppl))
            
        return True
