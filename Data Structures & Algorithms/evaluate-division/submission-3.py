class Solution:
    def calcEquation(self, equations: List[List[str]], values: List[float], queries: List[List[str]]) -> List[float]:
        adj = {}

        for (a, b), value in zip(equations, values):
            if not a in adj:
                adj[a] = []
            if not b in adj:
                adj[b] = []

            adj[a].append((b, value))
            adj[b].append((a, 1/value))
        
        res = []

        def dfs(cur, target, seen, weight):
            if cur not in adj:
                return -1
            if cur in seen:
                return -1
            seen.add(cur)

            for nei, val in adj[cur]:
                if not nei == cur:
                    if nei == target:
                        return weight * val
                    else:
                        result = dfs(nei, target, seen, weight * val)
                        if result != -1:
                            return result

            
            return -1

        for c, d in queries:
            res.append(dfs(c, d, set(), 1))
        
        return res