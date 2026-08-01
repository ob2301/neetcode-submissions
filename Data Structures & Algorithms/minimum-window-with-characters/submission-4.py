class Solution:
    def minWindow(self, s: str, t: str) -> str:
        needed = {}
        cur = {}
        res = ""
        curLen = len(s) + 1

        for letter in t:
            if letter in needed:
                needed[letter] += 1
            else:
                needed[letter] = 1
        
        if not s:
            return ""

        r = 0
        l = 0

        while r < len(s):
            if s[r] in needed:
                if not s[r] in cur:
                    cur[s[r]] = 1
                else:
                    cur[s[r]] += 1

            found = False #used to break
            toRemove = -1
            toNeed = -1

            if len(needed.keys()) == len(cur.keys()):
                for key, value in cur.items():
                    if value < needed[key]:
                        found = True
                        break

                if not found:
                    while l <= r:
                        if s[l] in cur and cur[s[l]] > needed[s[l]]:
                            cur[s[l]] -= 1
                            l += 1
                        elif s[l] not in cur:
                            l += 1
                        else:
                            break

                    if r - l + 1 < curLen:
                        curLen = r - l + 1
                        res = s[l: r + 1]
                        
            r += 1
        return res
        