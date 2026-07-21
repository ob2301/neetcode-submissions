from collections import deque

class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        if s[len(s) - 1] == "1":
            return False
        
        q = deque([0])
        visited = set()

        while q:
            i = q.popleft()
            if i == len(s) - 1:
                return True

            for j in range(minJump, maxJump + 1):
                if i + j < len(s) and i + j not in visited and s[i + j] == "0":
                    q.append(i + j)
                    visited.add(i + j)

        
        return False
            