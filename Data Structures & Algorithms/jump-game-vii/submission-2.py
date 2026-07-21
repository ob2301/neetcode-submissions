from collections import deque

class Solution:
    def canReach(self, s: str, minJump: int, maxJump: int) -> bool:
        if s[len(s) - 1] == "1":
            return False
        
        q, farthest = deque([0]), 0

        while q:
            i = q.popleft()
            if i == len(s) - 1:
                return True

            start = max(i + minJump, farthest + 1)
            for j in range(start, i + maxJump + 1):
                if j < len(s) and s[j] == "0":
                    q.append(j)
                farthest = j

        
        return False
            