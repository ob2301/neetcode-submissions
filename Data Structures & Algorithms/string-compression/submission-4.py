class Solution:
    def compress(self, chars: List[str]) -> int:
        resI = 0
        i = 0

        while i < len(chars):
            cur = chars[i]

            toAppend = 1

            while i < len(chars) - 1 and cur == chars[i + 1]:
                i += 1
                toAppend += 1
            
            if toAppend == 1:
                chars[resI] = cur
                resI += 1
            else:
                strVersion = str(toAppend)
                chars[resI] = cur
                resI += 1
                j = 0
                while j < len(strVersion) and resI < len(chars):
                    chars[resI] = strVersion[j]
                    j += 1
                    resI += 1
            i += 1

        return resI

            




