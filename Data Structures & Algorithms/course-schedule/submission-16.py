class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:

        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for pre, course in prerequisites:
            adj[course].append(pre)
        
        total_seen = set()

        def dfs(course, seen):
            if course in seen:
                return False
            if course in total_seen:
                return True

            seen.add(course)

            for c in adj[course]:
                if not dfs(c, seen): return False
            total_seen.add(course)

            return True

        for i in range(numCourses):
            if not dfs(i, set()): return False
        
        return True
            


        
        