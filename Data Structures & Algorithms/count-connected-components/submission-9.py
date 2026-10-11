class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        res = 0

        adj = {}

        for i in range(0, n):
            adj[i] = []

        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        globalSeen = set()
        def dfs(node, parent, seen):
            seen.add(node)
            for edge in adj[node]:
                if not edge == parent and not edge in seen:
                    dfs(edge, node, seen)
            globalSeen.add(node)
            #seen.remove(node)
            return

        for i in range(n):
            if not i in globalSeen:
                dfs(i, -1, set())
                res += 1
        
        return res
            

            