class MyStack:

    def __init__(self):
        self.stack = deque()

    def push(self, x: int) -> None:
        self.stack.append(x)

    def pop(self) -> int:
        if self.stack:
            toReturn = self.stack[-1]
            del self.stack[-1]
            return toReturn

    def top(self) -> int:
        if self.stack:
            return self.stack[-1]
        

    def empty(self) -> bool:
        if not self.stack:
            return True
        return False


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()