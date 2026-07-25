class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        n = len(tasks)
        
        # attach original index to each task, since output needs original task indices
        for i in range(n):
            tasks[i].append(i)
        # each task is now [enqueueTime, processingTime, originalIndex]

        tasks.sort(key=lambda x: x[0])  # sort by enqueue time

        minHeap = []
        res = []
        time = 0
        i = 0

        while i < n or minHeap:
            # push every task that has "arrived" by the current time
            while i < n and tasks[i][0] <= time:
                enq, proc, idx = tasks[i]
                heapq.heappush(minHeap, (proc, idx))  # sort by processing time, tiebreak by index
                i += 1

            if not minHeap:
                # CPU is idle — nothing has arrived yet, jump forward in time
                time = tasks[i][0]
                continue

            proc, idx = heapq.heappop(minHeap)
            time += proc          # CPU processes this task, advancing time
            res.append(idx)

        return res