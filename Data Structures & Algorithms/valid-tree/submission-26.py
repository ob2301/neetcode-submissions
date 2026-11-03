class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adj = {}

        for a, b in edges:
            if not a in adj:
                adj[a] = []
            if not b in adj:
                adj[b] = []

            adj[a].append(b)
            adj[b].append(a)
        
        totalSeen = set()
        def dfs(node, parent, seen):
            if node in seen:
                return False

            seen.add(node)

            if node in adj:
                for nei in adj[node]:
                    if not nei == parent:
                        if not dfs(nei, node, seen):
                            return False
            seen.remove(node)
            totalSeen.add(node)

            return True

        if not dfs(0, -1, set()):
            return False

        return len(totalSeen) == n
            