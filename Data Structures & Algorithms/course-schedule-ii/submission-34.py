class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {}

        for i in range(numCourses):
            adj[i] = []

        for a, b in prerequisites:
            adj[a].append(b)

        res = []
        seen = set()

        def dfs(course, localSeen):
            nonlocal seen

            if course in seen:
                return True
            
            if course in localSeen:
                return False #cycle detected
            
            localSeen.add(course)

            for pre in adj[course]:
                if not dfs(pre, localSeen):
                    return False
            
            res.append(course)
            seen.add(course)
            return True

        for i in range(numCourses):
            if not dfs(i, set()):
                return []

        return res

        

            


        