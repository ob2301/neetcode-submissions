class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        #a valid tree basically just has no cycle, not BST specified

        adj = {}
        for i in range(0, n):
            adj[i] = []

        #connect all edges

        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        #now dfs to look for cycles
        seen = set()
        def dfs(node, parent):
            if node in seen:
                return False
            
            seen.add(node)

            for neighbor in adj[node]:
                if not neighbor == parent:
                    if not dfs(neighbor, node):
                        return False
            
            return True
        
        #start from 0, if we dont get every node its not a single c0nnected graph

        if not dfs(0, -1):
            return False
        if len(seen) != n:
            return False
        
        return True
