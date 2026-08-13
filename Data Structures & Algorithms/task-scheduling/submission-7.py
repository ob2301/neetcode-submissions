class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        maxHeap = []
        freq = {}
        time = 0

        for task in tasks:
            if task in freq:
                freq[task] += 1
            else:
                freq[task] = 1

        for key, value in freq.items():
            heapq.heappush(maxHeap, (-value, key))

        #load them up by (occurances, letter)

        cooldown = []

        while maxHeap or cooldown:
            time += 1

            if maxHeap:
                (value, key) = heapq.heappop(maxHeap)

                value = -value

                if value > 1:
                    cooldown.append((value - 1, n + time, key))
            
            while cooldown and cooldown[0][1] <= time:
                (val, t, key) = cooldown.pop()
                heapq.heappush(maxHeap, (-val, key))
        return time


