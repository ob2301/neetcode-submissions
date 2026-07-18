from collections import deque

class Solution:
    def minKnightMoves(self, x: int, y: int) -> int:
        x, y = abs(x), abs(y)

        q = deque([(0, 0)])
        visited = {(0, 0)}

        dirs = [
            (1, 2), (2, 1), (-1, 2), (-2, 1),
            (1, -2), (2, -1), (-1, -2), (-2, -1)
        ]

        moves = 0

        while q:
            for _ in range(len(q)):
                curr_x, curr_y = q.popleft()

                if (curr_x, curr_y) == (x, y):
                    return moves

                for dx, dy in dirs:
                    nx, ny = curr_x + dx, curr_y + dy

                    # Don't explore too far into negative coordinates
                    if nx >= -2 and ny >= -2 and (nx, ny) not in visited:
                        visited.add((nx, ny))
                        q.append((nx, ny))

            moves += 1
