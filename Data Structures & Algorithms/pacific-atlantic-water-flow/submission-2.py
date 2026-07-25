class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        seenP = set()
        seenA = set()

        for r in range(len(heights)):
            for c in range(len(heights[0])):
                #pacific
                if r == 0 or c == 0:
                    seenP.add((r, c))
                #atlantic
                if r == len(heights) - 1 or c == len(heights[0]) - 1:
                    seenA.add((r, c))
        
        qP = deque()
        qA = deque()

        for (r, c) in seenP:
            qP.append([r, c])

        for (r, c) in seenA:
            qA.append([r, c])

        seen2A = set()
        seen2P = set()
        
        while qP:
            r, c = qP.popleft()
            if (r, c) in seen2P:
                continue
            seen2P.add((r, c))
            val = heights[r][c]
            dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            for x, y in dirs:
                dr, dc = x + r, c + y
                if dr >= 0 and dc >= 0 and dr < len(heights) and dc < len(heights[0]):
                    if heights[dr][dc] >= val:
                        seenP.add((dr, dc))
                        qP.append([dr, dc])
        
        while qA:
            r, c = qA.popleft()
            if (r, c) in seen2A:
                continue
            seen2A.add((r, c))
            val = heights[r][c]
            dirs = [[1,0], [0,1], [-1,0], [0,-1]]
            for x, y in dirs:
                dr, dc = x + r, c + y
                if dr >= 0 and dc >= 0 and dr < len(heights) and dc < len(heights[0]):
                    if heights[dr][dc] >= val:
                        seenA.add((dr, dc))
                        qA.append([dr, dc])
        
        res = []

        for (r, c) in seenP:
            if (r, c) in seenA:
                res.append([r, c])

        return res