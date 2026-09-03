class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        minHeap = []

        if grid[0][0] != 0:
            return -1
        
        heapq.heappush(minHeap, (1, 0, 0))
        seen = set()

        while minHeap:
            (count, r, c) = heapq.heappop(minHeap)
            if r == len(grid) - 1 and c == len(grid[0]) - 1:
                return count

            if (r, c) in seen:
                continue
            seen.add((r, c))

            dirs = [[1,0], [0,1], [-1,0], [0,-1], [1,1], [-1,-1], [1,-1], [-1,1]]
            for x, y in dirs:
                dr, dc = r + x, c + y

                if dr >= 0 and dc >= 0 and dr < len(grid) and dc < len(grid[0]) and grid[dr][dc] == 0 and not (dr, dc) in seen:
                    heapq.heappush(minHeap, (count + 1, dr, dc))
        
        return -1