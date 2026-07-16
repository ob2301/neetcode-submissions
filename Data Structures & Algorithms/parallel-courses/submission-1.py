class Solution:
    def minimumSemesters(self, n: int, relations: List[List[int]]) -> int:
        adj = {}

        for pre, course in relations:
            if course in adj:
                adj[course].append(pre)
            else:
                adj[course] = [pre]
        
        visited = {}
        visiting = set()
        
        def dfs(course):
            if course in visiting:
                visited[course] = -1
                return -1
            if course in visited:
                return visited[course]

            visiting.add(course)
            if course in adj:
                visited[course] = 1
                for pre in adj[course]:
                    new_ret = dfs(pre)
                    if new_ret == -1:
                        visited[course] = -1
                        return -1
                    visited[course] = max(visited[course], 1 + new_ret)
            else:
                visited[course] = 1
            visiting.remove(course)
            return visited[course]

        ret = 0
        for i in range(1, n + 1):
            new_ret = dfs(i)
            if new_ret == -1:
                return -1
            ret = max(ret, new_ret)

        return ret
