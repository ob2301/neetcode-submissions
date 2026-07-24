class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        freq = {}

        for task in tasks:
            if task in freq:
                freq[task] += 1
            else:
                freq[task] = 1
        
        maxHeap = []

        for key, value in freq.items():
            heapq.heappush(maxHeap, (-value, key))

        #top of the heap is now the most freq element
        cooldown = deque()
        time = 0

        while maxHeap or cooldown:
            time+=1

            if maxHeap:
                value, key = heapq.heappop(maxHeap)
                value = -value

                if value > 1:
                    cooldown.append((value - 1, key, time + n))


            if cooldown and cooldown[0][2] == time:
                val, key, t = cooldown.popleft()
                heapq.heappush(maxHeap, (-val, key))
        
        return time