class Solution:
    def findJudge(self, n: int, trust: List[List[int]]) -> int:
        adj = {}
        judges = {}

        for i in range(n):
            adj[i + 1] = []
            judges[i + 1] = []

        for a, b in trust:
            adj[a].append(b) #person -> people who he trusts
            judges[b].append(a) #person -> people who trust him
        
        potentialJudge = -1
        
        for pJudge, trustHim in judges.items():
            if len(adj[pJudge]) == 0 and len(trustHim) == n - 1:
                if potentialJudge != -1:
                    return -1
                else:
                    potentialJudge = pJudge

        
        return potentialJudge

        

        