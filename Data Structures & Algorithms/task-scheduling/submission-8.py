class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        maxHeap = []
        cooldown = deque()
        freq = {}
        time = 0

        for task in tasks:
            if task in freq:
                freq[task] += 1
            else:
                freq[task] = 1

        for task, fr in freq.items():
            heapq.heappush(maxHeap, (-fr, task))
        
        while maxHeap or cooldown:
            time += 1

            if maxHeap:
                fre, task = heapq.heappop(maxHeap)
                fre = -fre
                if fre > 1:
                    cooldown.append((time + n, fre - 1, task))
            
            while cooldown and cooldown[0][0] <= time:
                (t, f, task2) = cooldown.popleft()
                heapq.heappush(maxHeap, (-f, task2))
        
        return time




