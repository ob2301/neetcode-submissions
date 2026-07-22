class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # we load up num : freq in a map
        # maxheap, pop until k = 0

        freq = {}

        for num in nums:
            freq[num] = 1 + freq.get(num, 0)
        
        minHeap = []

        for key in freq.keys():
            heapq.heappush(minHeap, (-freq[key], key))

        res = []

        while k > 0:
            res.append(heapq.heappop(minHeap)[1])
            k = k - 1
        return res
        