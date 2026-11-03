class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        res = []
        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for a, b in prerequisites:
            adj[a].append(b)

        totalSeen = set()
        def dfs(course, seen):
            if course in totalSeen:
                return True

            if course in seen:
                return False
            
            seen.add(course)
            for pre in adj[course]:
                if not dfs(pre, seen):
                    return False
            res.append(course)
            seen.remove(course)
            totalSeen.add(course)

            return True
        
        for i in range(numCourses):
            if not i in totalSeen:
                if not dfs(i, set()):
                    return []
        return res
