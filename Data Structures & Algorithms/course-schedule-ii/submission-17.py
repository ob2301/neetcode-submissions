class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        adj = {}
        for a, b in prerequisites:
            if a in adj:
                adj[a].append(b)
            else:
                adj[a] = [b]

        ret = []
        visited = set()
        visiting = set()

        def dfs(node):
            if node in visiting:
                return False
            if node in visited:
                return True
            if node not in adj:
                ret.append(node)
                visited.add(node)
                return True

            visiting.add(node)

            for pre in adj[node]:
                if not dfs(pre):
                    return False

            visiting.remove(node)
            visited.add(node)
            ret.append(node)
            return True

        for i in range(numCourses):
            if not dfs(i):
                return []

        return ret

            


        