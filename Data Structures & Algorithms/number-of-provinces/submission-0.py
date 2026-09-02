class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        #ij == 1 if i connected to j

        adj = {}
        provinces = 0
        
        for r in range(len(isConnected)):
            for c in range(len(isConnected[0])):
                if isConnected[r][c] == 1:
                    if r in adj:
                        adj[r].append(c)
                    else:
                        adj[r] = [c]
        
        seen = set()

        #dfs over all connected components
        def dfs(first, parent, localSeen):
            if first in localSeen:
                return
            
            localSeen.add(first)

            for connection in adj[first]:
                if not connection == parent:
                    dfs(connection, first, localSeen)
            
            seen.add(first)
            

        for key in adj.keys():
            if not key in seen:
                dfs(key, -1, set())
                provinces += 1
        
        return provinces