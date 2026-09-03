class Solution:
    def killProcess(self, pid: List[int], ppid: List[int], kill: int) -> List[int]:
        #parents -> children graph
        adj = {}
        root = -1

        for i in range(len(pid)):
            if ppid[i] in adj:
                adj[ppid[i]].append(pid[i])
            else:
                adj[ppid[i]] = [pid[i]]
            
            if ppid[i] == 0:
                root = pid[i]
        
        res = []
        seen = set()

        def dfs(toKill):

            if toKill in seen:
                return
            
            seen.add(toKill)

            if not toKill in adj:
                res.append(toKill)
                return

            for child in adj[toKill]:
                dfs(child)
            
            res.append(toKill)
        
        dfs(kill)
        return res
        