class Solution:
    def isOneEditDistance(self, s: str, t: str) -> bool:
        if abs(len(s) - len(t)) > 1:
            return False

        difference = 0

        if len(s) == len(t):
            for i in range(len(t)):
                if difference > 1:
                    return False

                if t[i] != s[i]:
                    difference += 1

            if difference == 1:
                return True
        
        if len(s) != len(t):
            diff = 0
            if len(t) > len(s):
                ti = 0
                si = 0
                while si < len(s) and ti < len(t):
                    if s[si] != t[ti]:
                        ti += 1
                        diff += 1
                    else:
                        si += 1
                        ti += 1
                if diff > 1:
                    return False
                return True
            elif len(t) < len(s):
                ti = 0
                si = 0
                while si < len(s) and ti < len(t):
                    if s[si] != t[ti]:
                        si += 1
                        diff += 1
                    else:
                        si += 1
                        ti += 1
                if diff > 1:
                    return False
                return True

        return False

        
        
