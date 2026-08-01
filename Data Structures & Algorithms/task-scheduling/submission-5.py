class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        cycles = 0

        freq = {}

        for task in tasks:
            if task in freq:
                freq[task] += 1
            else:
                freq[task] = 1
        
        maxHeap = []

        for key, value in freq.items():
            heapq.heappush(maxHeap, (-value, key))

        cooldown = []

        while maxHeap or cooldown:
            cycles += 1
            if maxHeap:
                value, key = heapq.heappop(maxHeap)
                value = -value

                if value > 1:
                    heapq.heappush(cooldown, (n + cycles, value - 1, key))
            
            while cooldown and cooldown[0][0] <= cycles:
                time, val, k = heapq.heappop(cooldown)
                heapq.heappush(maxHeap, (-val, k))
        return cycles
