import sys
sys.setrecursionlimit(20000)
class Solution:
    def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
        adj = {}
        cache = {}

        for i in range(len(graph)):
            adj[i] = graph[i]

        #terminal node has no outgoing edges
        #node is safe if all outgoing seq eventually end at terminal node
        #basically, search for cycle and that term was reached

        #dfs from all nodes, see that we can reach terminal with no cycles

        def dfs(node, seen):
            if node in cache:
                return cache[node]
            
            if len(adj[node]) == 0:
                return True
            
            if node in seen:
                return False

            seen.add(node)

            for nei in adj[node]:
                if not dfs(nei, seen):
                    cache[node] = False
                    return False
                
            seen.remove(node)
            cache[node] = True
            return True
        
        res = []

        for start, li in adj.items():
            if start in cache and cache[start] == True:
                res.append(start)
                continue
            if dfs(start, set()):
                res.append(start)
        return res
            


