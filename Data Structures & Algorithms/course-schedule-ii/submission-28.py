class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        resSet = set()

        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for a, b in prerequisites:
            adj[a].append(b)
        
        def dfs(course, seen):
            if course in resSet:
                return True

            if course in seen:
                return False
            
            seen.add(course)
            for pre in adj[course]:
                if not dfs(pre, seen):
                    return False
            seen.remove(course)
            resSet.add(course)
            res.append(course)

            return True
        
        for i in range(numCourses):
            if not dfs(i, set()):
                return []
        
        return res

            


        