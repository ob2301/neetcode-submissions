class Solution:
    def appendCharacters(self, s: str, t: str) -> int:
        #case that t exists in s
        l = 0
        l2 = 0

        while l < len(s) and l2 < len(t):
            if s[l] == t[l2]:
                l2 += 1
            
            l += 1
        
      
        
        return len(t) - l2
