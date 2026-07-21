from collections import deque

class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        adj = {}

        for i in range(len(equations)):
            a, b = equations[i]
            v = values[i]
            if a in adj:
                adj[a].append((b, v))
            else:
                adj[a] = [(b, v)]

            if b in adj:
                adj[b].append((a, 1/v))
            else:
                adj[b] = [(a, 1/v)]


        def bfs(start, target):
            q = deque([(start, 1)])
            visited = set()
            i = 0
            while q:
                node, val = q.popleft()
                if node == target and i != 0:
                    return val
                
                i = 1
                if node in adj:
                    for nei, mul in adj[node]:
                        if nei not in visited:
                            q.append((nei, val * mul))
                            visited.add(nei)

            return -1.0

        ret = []
        for start, target in queries:
            ret.append(bfs(start, target))

        return ret


