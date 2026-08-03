class Solution:
    def decodeString(self, s: str) -> str:
        stack = []

        i = 0

        while i < len(s):
            while i < len(s) and s[i] != "]":
                stack.append(s[i])
                i += 1
            
            if i == len(s) - 1 and s[i] != "]":
                #complete
                return ''.join(stack)

            res = ""

            while stack and stack[-1] != "[":
                res += stack.pop()[::-1]
            res = res[::-1]
            if stack:
                stack.pop()
                digit = ""

                while stack and stack[-1].isdigit():
                    digit += (stack.pop())
            
                digit = int(digit[::-1])

                if digit == 0:
                    continue
                elif digit == 1:
                    stack.append(res)
                else:
                    ogRes = res
                    while digit > 1:
                        res = res + ogRes
                        digit -= 1
                    stack.append(res)
            else:
                stack.append(res)
            i += 1
        return ''.join(stack)


