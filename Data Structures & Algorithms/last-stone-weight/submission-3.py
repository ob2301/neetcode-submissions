class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        maxHeap = []

        for stone in stones:
            heapq.heappush(maxHeap, -stone)
            #remember negative!
        
        while len(maxHeap) > 1:
            stone1, stone2 = heapq.heappop(maxHeap), heapq.heappop(maxHeap)

            stone1 = -stone1
            stone2 = -stone2

            if stone1 == stone2:
                continue
            
            heapq.heappush(maxHeap, -(abs(stone1 - stone2)))
        
        if not maxHeap:
            return 0
        
        return -maxHeap[0]