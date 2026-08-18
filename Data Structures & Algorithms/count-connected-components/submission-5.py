class Solution:
    def countComponents(self, n: int, edges: List[List[int]]) -> int:
        adj = {}
        edgess = 0

        for i in range(n):
            adj[i] = []

        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        
        seen = set()

        def dfs(node, parent):

            if node in seen:
                return
            
            seen.add(node)
            
            for edge in adj[node]:
                if not edge == parent and not edge in seen:
                    dfs(edge, node)
            
        
        for i in range(n):
            if not i in seen:
                dfs(i, -1)
                edgess += 1
        
        return edgess
            

            