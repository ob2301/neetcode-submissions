class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = {}

        for num in nums:
            if num in freq:
                freq[num] = freq[num] + 1
            else:
                freq[num] = 1

        heap = []

        for num in freq.keys():
            heapq.heappush(heap, (freq[num], num))

            if len(heap) > k:
                heapq.heappop(heap)
        
        res = []

        for i in range(k):
            res.append(heapq.heappop(heap)[1])
        
        return res
        
        