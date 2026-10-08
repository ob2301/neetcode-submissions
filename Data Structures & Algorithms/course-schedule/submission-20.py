class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        adj = {}

        for i in range(0, numCourses):
            adj[i] = []

        for a, b in prerequisites:
            adj[a].append(b)

        totalSeen = set()

        def dfs(seen, course):
            if course in seen:
                return False
            
            seen.add(course)
            
            if course in totalSeen:
                return True
            
            for pre in adj[course]:
                if not dfs(seen, pre):
                    return False
            seen.remove(course)
            
            totalSeen.add(course)
            return True
        
        for i in range(numCourses):
            if not i in totalSeen:
                if not dfs(set(), i):
                    return False
        
        return True
            


        
        