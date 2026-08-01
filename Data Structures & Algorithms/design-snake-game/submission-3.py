class SnakeGame:

    def __init__(self, width: int, height: int, food: List[List[int]]):
        self.w = width
        self.h = height
        self.food = food
        self.pos = deque()
        self.pos.append((0, 0))
        self.length = 1
        self.score = 0
        self.curFood = 0

    def move(self, direction: str) -> int:
        r = 0
        c = 0

        if direction == "R":
            c += 1
        if direction == "L":
            c -= 1
        if direction == "U":
            r -= 1
        if direction == "D":
            r += 1
        
        (row, col) = self.pos[-1]
        r += row
        c += col

        if r == self.h or c == self.w or r == -1 or c == -1:
            return -1

        if self.curFood < len(self.food) and (r, c) == (self.food[self.curFood][0], self.food[self.curFood][1]):
            self.curFood += 1
            self.length += 1
            self.pos.append((r, c))
            self.score += 1
        
        else:
            self.pos.popleft()
            if (r, c) in self.pos:
                return -1
            self.pos.append((r, c))

        return self.score

        
        


# Your SnakeGame object will be instantiated and called as such:
# obj = SnakeGame(width, height, food)
# param_1 = obj.move(direction)
