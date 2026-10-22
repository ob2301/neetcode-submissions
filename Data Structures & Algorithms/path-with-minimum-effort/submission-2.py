class Solution:
    def minimumEffortPath(self, heights: List[List[int]]) -> int:
        minHeap = []
        seen = set()
        n = len(heights) - 1
        m = len(heights[0]) - 1

        heapq.heappush(minHeap, (0, 0, 0))
        #abs diff, r, c

        while minHeap:
            diff, r, c = heapq.heappop(minHeap)

            if (r, c) in seen:
                continue
            
            seen.add((r, c))

            if r == n and c == m:
                return diff
            
            dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            for dr, dc in dirs:
                dx, dy = r + dr, c + dc

                if dx >= 0 and dy >= 0 and dx <= n and dy <= m and (dx, dy) not in seen:
                    heapq.heappush(minHeap, (max(diff, abs(heights[dx][dy] - heights[r][c])), dx, dy))
                
        return -1

        