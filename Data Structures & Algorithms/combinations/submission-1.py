class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        
        final = []

        def dfs(i, final, cur):
            if len(cur) == k:
                final.append(cur.copy())
                return

            if i > n:
                return
            
            cur.append(i)
            dfs(i + 1, final, cur)

            cur.pop()
            dfs(i + 1, final, cur)

        dfs(1, final, [])
        return final