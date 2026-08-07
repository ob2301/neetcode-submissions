class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        #maxHeap with distance as the key

        maxHeap = []
        res = []

        for i in range(len(arr)):
            heapq.heappush(maxHeap, (abs(arr[i] - x), arr[i]))
        
        while k and maxHeap:
            res.append(heapq.heappop(maxHeap)[1])
            k -= 1
        
        return sorted(res)