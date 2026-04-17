class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        #first thought is to make adj list since graph problem

        adj = [[] for _ in range(numCourses)]
        res = []
        cache = [set() for _ in range(numCourses)]

        for u, v in prerequisites:
            adj[v].append(u)

        def dfs(course):
            if cache[course]:
                return cache[course]
                
            for pre in adj[course]:
                cache[course].add(pre)
                cache[course] |= dfs(pre)
            return cache[course]


        for i in range(numCourses):
            dfs(i) #to precompute


        for uj, vj in queries:
            res.append(uj in cache[vj]) #O(1) lookup bc of cache

        return res


        

        