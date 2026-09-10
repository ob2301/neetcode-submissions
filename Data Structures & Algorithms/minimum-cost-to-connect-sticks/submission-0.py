class Solution:
    def connectSticks(self, sticks: List[int]) -> int:
        minHeap = []
        res = 0

        for stick in sticks:
            heapq.heappush(minHeap, (stick))
        
        while minHeap:
            cur = heapq.heappop(minHeap)

            if not minHeap:
                #res += cur
                return res
            
            cur2 = heapq.heappop(minHeap)
            newStick = (cur2 + cur)
            res += newStick
            heapq.heappush(minHeap, (newStick))
        
        return res