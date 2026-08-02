class Solution:
    def decodeString(self, s: str) -> str:
        stack = []
        fRes = ""

        i = 0

        while i < len(s):

            while i < len(s) and s[i] != "]":
                stack.append(s[i])
                i += 1
            #we are now on a closing bracket
            res = ""
            digit = ""

            if i < len(s) and s[i] == "]":
                while stack and stack[-1] != "[":
                    res += stack.pop()[::-1]
            
            if stack and stack[-1] == "[":

                stack.pop() #popping close bracket

                while stack and stack[-1].isdigit():
                    digit += stack.pop()
            
                res = res[::-1]
                toAdd = res
                digit = int(digit[::-1])

                if digit == 0:
                    res = ""

                while digit > 1:
                    res = res + toAdd
                    digit -= 1
            
                stack.append(res)
                i += 1
        
        return ''.join(stack)