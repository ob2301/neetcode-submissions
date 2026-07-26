class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        l = 0
        r = k - 1
        maxHeap = []
        res = []

        for i in range(k - 1):
            heapq.heappush(maxHeap, (-nums[i], i))

        while r < len(nums):
            heapq.heappush(maxHeap, (-nums[r], r))
            
            while maxHeap[0][1] < l:
                heapq.heappop(maxHeap)

            newMax = -maxHeap[0][0]

            res.append(newMax)

            r += 1
            l += 1

        return res
            
