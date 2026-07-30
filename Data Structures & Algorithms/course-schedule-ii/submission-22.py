class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for course, pre in prerequisites:
            adj[course].append(pre)
        
        res = []
        globalSeen = set()

        def dfs(course, seen):
            if course in globalSeen:
                return True

            if course in seen:
                return False

            seen.add(course)

            for pres in adj[course]:
                if not dfs(pres, seen):
                    return False

            res.append(course)
            globalSeen.add(course)
            seen.remove(course)

            return True

        for i in range(numCourses):
            if not dfs(i, set()):
                return []
        
        return res

            


        