class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []
        i = 0

        while i < len(operations):

            if operations[i] != "+" and operations[i] != "D" and operations[i] != "C":
                stack.append(int(operations[i]))

            else:
                x = operations[i]

                if x == "C" and len(stack):
                    stack.pop()
                
                if x == "+" and len(stack) >= 2:
                    stack.append(stack[len(stack) - 1] + stack[len(stack) - 2])

                if x == "D" and len(stack):
                    stack.append(stack[len(stack) - 1] * 2)
            
            i += 1
        
        return sum(stack)