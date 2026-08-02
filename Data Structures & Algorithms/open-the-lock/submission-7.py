class Solution:
    def openLock(self, deadends: List[str], target: str) -> int:
        minHeap = []

        heapq.heappush(minHeap, (0, "0000"))
        seen = set(deadends)
        if "0000" in seen:
            return -1

        #if we hit a deadend, we just continue

        while minHeap:

            turns, code = heapq.heappop(minHeap)
            if code in seen:
                continue
            
            if code == target:
                return turns
            
            seen.add(code)

            for i in range(4):
                toManipulate = int(code[i])
                add = code[0: i] + str((toManipulate + 1) % 10) + code[i + 1: len(code)]
                subtract = code[0: i] + str((toManipulate + 10 - 1) % 10) + code[i + 1: len(code)]

                heapq.heappush(minHeap, (turns + 1, add)) #add 1
                heapq.heappush(minHeap, (turns + 1, subtract)) #subtract 1

        return -1
