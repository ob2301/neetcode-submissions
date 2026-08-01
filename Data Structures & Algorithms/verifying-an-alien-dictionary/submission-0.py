class Solution:
    def isAlienSorted(self, words: List[str], order: str) -> bool:
        adj = {}

        i = 0
        while i < len(order):
            adj[order[i]] = i
            i += 1

        i = 0
        while i < len(words) - 1:
            first = words[i]
            second = words[i + 1]

            if first[0:len(second)] == second:
                return False
            
            j = 0

            while j < len(first) and j < len(second):
                if adj[first[j]] > adj[second[j]]:
                    return False
                if adj[first[j]] < adj[second[j]]:
                    break
                j += 1
            
            i += 1
        
        return True
        