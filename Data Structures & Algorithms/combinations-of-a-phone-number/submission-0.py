class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        map = {
            '2':'abc',
            '3':'def',
            '4':'ghi',
            '5':'jkl',
            '6':'mno',
            '7':'pqrs',
            '8':'tuv',
            '9':'wxyz'
        }

        final = []
        total = 0
        str = ""

        for digit in digits:
            str += map[digit]

        def dfs(i, final, cur):
            if len(cur) == len(digits):
                final.append(cur)
                return

            for c in map[digits[i]]:
                dfs(i + 1, final, cur + c)
        
        if digits:
            dfs(0, final, "")
            
        return final







