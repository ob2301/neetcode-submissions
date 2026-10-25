class Solution:
    def minScore(self, n: int, roads: List[List[int]]) -> int:
        adj = {}

        for a, b, dist in roads:
            if not a in adj:
                adj[a] = []
            if not b in adj:
                adj[b] = []
            
            adj[a].append((b, dist))
            adj[b].append((a, dist))
        
        #from city 1 -> n

        queue = deque()
        queue.append(1)
        minPath = float('inf')
        seen = set()

        while queue:
            city = queue.pop()
            if city in seen:
                continue
            seen.add(city)

            for nextCity, dist in adj[city]:
                if not nextCity in seen:
                    queue.append(nextCity)
                    minPath = min(minPath, dist)
        return minPath

            