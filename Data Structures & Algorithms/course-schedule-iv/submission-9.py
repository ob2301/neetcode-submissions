class Solution:
    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:
        #build adj list
        #build second list for ind prereqs
        adj = {}
        totalPres = {}
        res = []


        for i in range(numCourses):
            adj[i] = []
        
        for a, b in prerequisites:
            adj[b].append(a) #take a before b, dfs until a len(A) == 0
        
        def dfs(course):
            if course in totalPres:
                return totalPres[course]
            
            totalPres[course] = set()
            
            for pre in adj[course]:
                dfs(pre)
                totalPres[course].add(pre)
                totalPres[course] |= totalPres[pre]
            
            return totalPres[course]
        
        for u, v in queries:
            dfs(v)
            if u in totalPres[v]:
                res.append(True)
            else:
                res.append(False)
        
        return res


