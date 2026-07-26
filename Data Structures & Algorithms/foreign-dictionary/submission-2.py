class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adj = {}
        res = []
        letters = set()

        for word in words:
            for i in word:
                letters.add(i)

        for i in range(len(words) - 1):
            j = 0

            while j < len(words[i]) and j < len(words[i + 1]) and words[i][j] == words[i + 1][j]:
                j+=1 #come back here, dont forget about abc and abcd

            if j == len(words[i + 1]) and not j == len(words[i]):
                return ""
                #abc -> abcd rule
            elif j == len(words[i]):
                continue
            
            if words[i][j] in adj:
                adj[words[i][j]].add(words[i + 1][j])
            else:
                adj[words[i][j]] = set()
                adj[words[i][j]].add(words[i + 1][j])
#n -> f
#h -> e
#r -> n
#e -> r
        checks = {}

        def dfs(cur, seen):
            nonlocal res

            if cur in checks:
                return checks[cur]

            if cur in seen:
                return False
            seen.add(cur)

            if cur in adj:
                for less in adj[cur]:
                    if not dfs(less, seen):
                        return False
            
            checks[cur] = True
            res.append(cur)
            return True
        
        for char in letters:
            if not dfs(char, set()):
                return ""
        res.reverse()
        return ''.join(res)

            