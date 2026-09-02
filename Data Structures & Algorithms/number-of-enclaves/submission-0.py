class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        #basically just find all 1s, and count the ones that arent
        #connected to the edge

        seen = set()
        enclave = 0

        def bfs(row, col):
            queue = deque()
            queue.append((row, col))
            enclaves = 0
            hitEdge = False

            while queue:
                (row, col) = queue.pop()

                if (row, col) in seen:
                    continue
                enclaves += 1
                seen.add((row, col))

                if row == 0 or col == 0 or row == len(grid) - 1 or col == len(grid[0]) - 1:
                    hitEdge = True

                dirs = [[1,0], [0,1], [-1,0], [0,-1]]
                for x, y in dirs:
                    dr, dc = x + row, y + col

                    if dr >= 0 and dc >= 0 and dr < len(grid) and dc < len(grid[0]) and grid[dr][dc] == 1:
                        queue.append((dr, dc))
            
            if hitEdge:
                return 0
            return enclaves
        
        for r in range(len(grid)):
            for c in range(len(grid[0])):
                if grid[r][c] == 1 and not (r, c) in seen:
                    enclave += bfs(r, c)
        
        return enclave

