class Solution:
    def assignBikes(self, workers: List[List[int]], bikes: List[List[int]]) -> List[int]:
        #go through all bikes and workers, list distance
        minHeap = []
        
        for w in range(len(workers)):
            for b in range(len(bikes)):
                (x1, y1) = workers[w]
                (x2, y2) = bikes[b]

                dist = abs(x1 - x2) + abs(y1 - y2)

                heapq.heappush(minHeap, (dist, w, b))

        workersToBike = {}
        bikeSeen = set()
        workerSeen = set()

        while minHeap and len(workersToBike) < len(workers):
            (dist, w, b) = heapq.heappop(minHeap)

            if b in bikeSeen:
                continue
            
            if w in workerSeen:
                continue
            
            bikeSeen.add(b)
            workerSeen.add(w)

            workersToBike[w] = b
        
        res = []

        for i in range(len(workers)):
            res.append(workersToBike[i])

        return res

