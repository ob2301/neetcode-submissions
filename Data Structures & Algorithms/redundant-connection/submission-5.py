class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        #at u, look for v!

        adj = {}

        for i in range(1, len(edges) + 1):
            adj[i] = []

        def dfs(a, b, parent):
            if a == b:
                return True

            for edge in adj[a]:
                if not edge == parent and dfs(edge, b, a):
                    return True
            
            return False

        for a, b in edges:
            #check if we can reach a from b already
            if dfs(a, b, -1):
                return [a, b]

            adj[a].append(b)
            adj[b].append(a)
                




