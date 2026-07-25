class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {}

        seen = set()
        res = []

        for i in range(numCourses):
            adj[i] = []

        for course, pre in prerequisites:
            adj[course].append(pre)

        def dfs(course, localSeen):
            if course in seen:
                return True

            if course in localSeen:
                return False
            
            localSeen.add(course)

            for to in adj[course]:
                if not dfs(to, localSeen): return False
            
            seen.add(course)
            res.append(course)
            return True
        
        for i in range(numCourses):
            if not dfs(i, set()): return []
        
        return res

            


        