class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        #a, b -> a / b

        adj = {}

        for (a, b), val in zip(equations, values):
            if not a in adj:
                adj[a] = []
            if not b in adj:
                adj[b] = []

            adj[a].append((b, val))
            adj[b].append((a, 1/val))
        
        res = []
        #get from c to d
        def dfs(c, d, weight, seen):
            if c in seen:
                return
            
            if not c in adj:
                return -1
            if c == d:
                return weight
            
            seen.add(c)

            for neighbor, w2 in adj[c]:
                if not neighbor in seen:
                    if neighbor == d:
                        return weight * w2
                    else:
                        res = dfs(neighbor, d, weight * w2, seen)
                        
                        if res != -1:
                            return res
            
            return -1
            
        for c, d in queries:
            res.append(dfs(c, d, 1, set()))

        return res


        