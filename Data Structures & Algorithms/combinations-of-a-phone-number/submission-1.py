class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitMap = {}
        res = []

        digitMap["2"] = ['a', 'b', 'c']
        digitMap["3"] = ['d', 'e', 'f']
        digitMap["4"] = ['g', 'h', 'i']
        digitMap["5"] = ['j', 'k', 'l']
        digitMap["6"] = ['m', 'n', 'o']
        digitMap["7"] = ['p', 'q', 'r', 's']
        digitMap["8"] = ['t', 'u', 'v']
        digitMap["9"] = ['w', 'x', 'y', 'z']
        if not len(digits): return []

        def dfs(start, combo):
            if start == len(digits):
                res.append(combo)
                return
            
            num = digits[start]

            if num in digitMap:
                for letter in digitMap[num]:
                    dfs(start + 1, combo + letter)

        dfs(0, "")
        return res







