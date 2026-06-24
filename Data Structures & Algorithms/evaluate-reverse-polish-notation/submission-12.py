class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        
        stack = []

        operands = set(['-', '+', '/', '*'])
        
        for token in tokens:
            if token in operands:
                if len(stack) >= 2:
                    right = int(stack.pop())
                    left = int(stack.pop())
                    if token == "+":
                        stack.append(left+right)
                    if token == "/":
                        if right == 0:
                            return -1
                        stack.append(int(left/right))
                    if token == "-":
                        stack.append(left-right)
                    if token == "*":
                        stack.append(left*right)
                else:
                    return -1 
            else:
                stack.append(int(token))
        return stack[0]