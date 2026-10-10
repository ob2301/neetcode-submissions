class Solution:
    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:
        adj = {}

        for i in range(1, len(edges) + 1):
            adj[i] = []

        def dfs(start, parent, target):
            if start == target:
                return False

            for neighbor in adj[start]:
                if not neighbor == parent:
                    if not dfs(neighbor, start, target):
                        return False

            return True

        for a, b in edges:
            #see if we can reach a from b before we add a and b
            adj[a].append(b)
            adj[b].append(a)

            if not dfs(a, b, b):
                return [a, b]


        

        
                




