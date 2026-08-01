class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        cooldown = [] #minHeap

        for indx, t in enumerate(tasks):
            t.append(indx)
        
        tasks.sort(key=lambda x: x[0])
        res = []
        i = 0
        time = tasks[0][0]

        while i < len(tasks) or cooldown:
            while i < len(tasks) and tasks[i][0] <= time:
                enq, proc, indx = tasks[i]
                heapq.heappush(cooldown, (proc, indx))
                i += 1
            
            if cooldown:
                proc, indx = heapq.heappop(cooldown)
                res.append(indx)
                time += proc
            else:
                enq, proc, indx = tasks[i]
                i += 1
                heapq.heappush(cooldown, (proc, indx))
                time = enq
        return res


            

            


