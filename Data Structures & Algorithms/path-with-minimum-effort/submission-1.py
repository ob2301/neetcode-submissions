class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        minHeap = []

        heapq.heappush(minHeap, (0, 0, 0))
        seen = set()

        while minHeap:
            diff, r, c = heapq.heappop(minHeap)

            if r == len(heights) - 1 and c == len(heights[0]) - 1:
                return diff

            if (r, c) in seen:
                continue
            
            seen.add((r, c))
            
            dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            for x, y in dirs:
                dr, dc = x + r, y + c

                if dr >= 0 and dc >= 0 and dr < len(heights) and dc < len(heights[0]):
                    newDiff = abs(heights[dr][dc] - heights[r][c])
                    diff2 = max(diff, newDiff)
                    heapq.heappush(minHeap, (diff2, dr, dc))
        
        return 0
        
        