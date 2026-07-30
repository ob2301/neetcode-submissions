class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        #all edges connected
        #no cycles

        adj = {}

        for i in range(n):
            adj[i] = []

        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        
        seen = set()

        def dfs(parent, node):
            if node in seen:
                return False
            
            seen.add(node)

            for children in adj[node]:
                if not children == parent:
                    if not dfs(node, children):
                        return False
            
            return True
        
        if not dfs(None, 0):
            return False
        if not len(seen) == n:
            return False
        return True



        



        