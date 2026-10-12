class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        adj = {}
        top = {}
        res = []
        cache = {}

        for i in range(0, numCourses):
            adj[i] = []
            top[i] = set()

        for a, b in prerequisites:
            adj[b].append(a)
            #b needs a
        
        def dfs(course):
            if course in cache:
                return cache[course]
            for allowed in adj[course]:
                dfs(allowed)
                top[course].add(allowed)
                top[course].update(top[allowed])
            
            cache[course] = top[course]
            return course

        for i in range(numCourses):
            dfs(i)

        for u, v in queries:
            if u in top[v]:
                res.append(True)
            else:
                res.append(False)
        return res

        