class Solution:
    def leadsToDestination(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:

        adj = {}

        for i in range(n):
            adj[i] = []

        for a, b in edges:
            adj[a].append(b)

        #every node without outgoing edges must be destination
        #if a node has edges, then it cannot be destination
        def dfs(node, seen):
            if node in seen:
                return False

            seen.add(node)

            if node == destination and len(adj[node]) != 0:
                return False
            
            if len(adj[node]) == 0 and node != destination:
                return False
            
            for edge in adj[node]:
                if not dfs(edge, seen):
                    return False
            seen.remove(node)

            return True
        
        return dfs(source, set())

        
        