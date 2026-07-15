class TicTacToe:

    def __init__(self, n: int):
        self.rows = [[0,0] for _ in range(n)]
        self.cols = [[0,0] for _ in range(n)]
        self.diagonals = [[0,0] for _ in range(2)]
        self.n = n

    def move(self, row: int, col: int, player: int) -> int:
        self.rows[row][player - 1] += 1
        self.cols[col][player - 1] += 1
        if self.rows[row][player - 1] == self.n or self.cols[col][player - 1] == self.n:
            return player
        if row == col:
            self.diagonals[0][player - 1] += 1
            if self.diagonals[0][player - 1] == self.n:
                return player
        if row + col + 1 == self.n:
            self.diagonals[1][player - 1] += 1
            if self.diagonals[1][player - 1] == self.n:
                return player

        return 0


# Your TicTacToe object will be instantiated and called as such:
# obj = TicTacToe(n)
# param_1 = obj.move(row,col,player)
