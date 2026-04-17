class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for course, pre in prerequisites:
            adj[course].append(pre)

        # seen = set()

        def dfs(crs, seen):
            if crs in seen:
                return False
            
            seen.add(crs)

            for pre in adj[crs]:
                if not dfs(pre, seen):
                    return False
            
            seen.remove(crs)

            return True

        for i in range(numCourses):
            seen = set()
            if not dfs(i, seen):
                return False
        
        return True

        
        