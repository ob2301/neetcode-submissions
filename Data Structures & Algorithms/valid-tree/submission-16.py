class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adj = {}

        for a, b in edges:
            if a in adj:
                adj[a].append(b)
            else:
                adj[a] = [b]

            if b in adj:
                adj[b].append(a)
            else:
                adj[b] = [a]

        visiting = set()
        visited = set()
        def dfs(node, parent):
            if node in visited:
                return True
            if node in visiting:
                return False
            
            visiting.add(node)
            if node in adj:
                for nei in adj[node]:
                    if nei != parent:
                        if not dfs(nei, node):
                            return False
            
            visiting.remove(node)
            visited.add(node)
            return True

        if not dfs(0, -1):
            return False

        return len(visited) == n


        



        