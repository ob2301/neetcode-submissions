class Solution:
    def assignBikes(self, workers: List[List[int]], bikes: List[List[int]]) -> List[int]:
        #workers[i] = position of ith worker
        #bikes[j] = position of jth bike

        #find pair with shortest distance

        #for each worker

        minHeap = []

        for w in range(len(workers)):
            for b in range(len(bikes)):
                (x1, y1) = workers[w]
                (x2, y2) = bikes[b]
                manDist = abs(x1 - x2) + abs(y1 - y2)
                heapq.heappush(minHeap, (manDist, w, b))
                #pass in (manhatten distance, worker index, bike index)
        
        resMap = {}
        seenW = set()
        seenB = set()

        while minHeap and not (len(resMap) == len(workers)):
            (dist, workerIndex, bikeIndex) = heapq.heappop(minHeap)

            if workerIndex in seenW or bikeIndex in seenB:
                continue
            
            seenW.add(workerIndex)
            seenB.add(bikeIndex)

            resMap[workerIndex] = bikeIndex
        
        res = []

        for i in range(len(workers)):
            res.append(resMap[i])
        
        return res
