class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        first = {}
        second = {}

        if not len(s) == len(t):
            return False

        for i in range(len(s)):
            if s[i] in first:
                first[s[i]] = first[s[i]] + 1
            else:
                first[s[i]] = 1
        
        for i in range(len(t)):
            if t[i] in second:
                second[t[i]] = second[t[i]] + 1
            else:
                second[t[i]] = 1
        
        for i in range(len(s)):
            if not s[i] in second and first:
                return False
            else:
                if not second[s[i]] == first[s[i]]:
                    return False
        
        return True
     
