class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        adj = {}

        dp = [set() for _ in range(numCourses)] #dp[i] is the courses reachable from i

        for i in range(numCourses):
            adj[i] = []

        for src, dest in prerequisites:
            adj[src].append(dest) #pre, crs to take
        
        seen = set()
        
        def dfs(crs):
            if dp[crs]:
                return dp[crs]
            
            for neighbor in adj[crs]:
                dp[crs].add(neighbor)
                dp[crs] |= dfs(neighbor)
            
            return dp[crs]

        for i in range(numCourses):
            dfs(i)
        
        res = []
        
        for u, v in queries:
            res.append(v in dp[u])

        return res

        

        