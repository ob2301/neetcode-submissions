class Solution:
    def validWordAbbreviation(self, word: str, abbr: str) -> bool:
        l, l2 = 0, 0
        res = ""

        while l < len(word) and l2 < len(abbr):
            if not abbr[l2].isalpha():
                
                if abbr[l2] == "0":
                    return False
                toAdd = ""
                while l2 < len(abbr) and not abbr[l2].isalpha():
                    toAdd += abbr[l2]
                    l2 += 1
                if toAdd:
                    toAdd = int(toAdd)
                    l += toAdd
            else:
                if not abbr[l2] == word[l]:
                    return False
                l += 1
                l2 += 1
        
        return l2 == len(abbr) and l == len(word)

        