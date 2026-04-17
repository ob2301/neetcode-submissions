class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for course, pre in prerequisites:
            adj[course].append(pre)

        globalseen = set()
        res = []

        def dfs(course, seen):
            if course in seen:
                return False

            if course in globalseen:
                return True
                
            seen.add(course)

            for crs in adj[course]:
                if not dfs(crs, seen):
                    return False
            seen.remove(course)
            globalseen.add(course)
            res.append(course)

            return True
        
        for i in range(numCourses):
            seen = set()
            if i in res:
                continue
            if not i in globalseen: 
                if not dfs(i, seen):
                    return []

        return list(res)