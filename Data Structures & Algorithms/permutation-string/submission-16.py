class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        m = {}

        for letter in s1:
            if letter in m:
                m[letter] += 1
            else:
                m[letter] = 1

        i = 0

        while i < len(s2):
            left = i
            freq = m.copy()
            while left < len(s2) and s2[left] in freq:
                if freq[s2[left]] > 1:
                    freq[s2[left]] -= 1
                else:
                    freq.pop(s2[left])
                left+=1

            if not freq:
                return True
            
            i+=1
        return False
