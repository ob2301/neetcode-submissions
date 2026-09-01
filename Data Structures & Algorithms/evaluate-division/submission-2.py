from collections import deque

class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        adj = {}

        for i in range(len(equations)):
            origin, to = equations[i][0], equations[i][1]
            w1, w2 = values[i], 1/values[i]

            if origin in adj:
                adj[origin].append((w1, to))
            else:
                adj[origin] = [(w1, to)]
            
            if to in adj:
                adj[to].append((w2, origin))
            else:
                adj[to] = [(w2, origin)]
            
        #there can be multiple paths from a to c, but all will equal the same

        #bfs from query[0] -> query[1]

        res = []

        def bfs(origin, destination):
            queue = deque()

            queue.append((1, origin))
            seen = set()

            while queue:
                weight, start = queue.pop()

                if start in seen:
                    continue
                
                if not origin in adj:
                    continue
                
                seen.add(start)

                if start == destination:
                    return weight
                
                for (w2, neighbor) in adj[start]:
                    queue.append((weight * w2, neighbor))
            
            return -1
        
        for a, b in queries:
            res.append(bfs(a, b))

        return res

        


