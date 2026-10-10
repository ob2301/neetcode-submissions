class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        #a valid tree basically just has no cycle, not BST specified

        adj = {}

        for i in range(0, n):
            adj[i] = []

        for a, b in edges:
            adj[a].append(b)
            adj[b].append(a)

        seen = set()
        def dfs(node, parent):
            if node in seen:
                return False

            seen.add(node)

            for edge in adj[node]:
                if not edge == parent:
                    if not dfs(edge, node):
                        return False

            return True
        
        if not dfs(0, -1) or not len(seen) == n:
            return False
        
        return True
