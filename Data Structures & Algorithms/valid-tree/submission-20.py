class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        #no cycles and every node is in one tree

        adj = {}

        i = 0
        while i < n:
            adj[i] = []
            i += 1
        
        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)
        
        cycle = set()
        def dfs(node, parent):
            if node in cycle:
                return False
            
            cycle.add(node)

            for child in adj[node]:
                if not child == parent:
                    if not dfs(child, node):
                        return False

            return True
        
        res = dfs(0, -1)

        if not len(cycle) == n or not res:
            return False
        return True