class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        #must take b to take a [a, b]

        adj = {}

        for i in range(0, numCourses):
            adj[i] = []

        for a, b in prerequisites:
            adj[a].append(b)
        
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
            seen.remove(course)
            globalSeen.add(course)
            return True
        

        for i in range(0, numCourses):
            if i in globalSeen:
                continue
            if not dfs(i, set()):
                return []

        return res


        

            


        